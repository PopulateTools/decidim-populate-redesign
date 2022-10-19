#!/bin/bash

# handle kill signs
trap "echo; exit 1" INT TERM

LOCAL_DECIDIM_SHA=$( grep revision Gemfile.lock | awk '{print $2}')
REMOTE_DECIDIM_SHA=$(git ls-remote https://github.com/decidim/decidim.git | grep feature/redesign-staging | awk '{print $1}')

function log() {
  echo -e "\n==== $1 ===="
}

if [[ $LOCAL_DECIDIM_SHA == $REMOTE_DECIDIM_SHA ]]; then
  log "Local and remote Decidim SHA match. Aborting."
  exit 0
fi

log "Setup bundler and dependencies" && rm -f Gemfile.lock && bundle config --delete frozen && bundle install && bundle lock --add-platform x86_64-linux
log "Clear packages" && rm -rf package*
log "Run Turbo task isolated (it does not work within decidim:webpacker:install)" && bin/rails turbo:install
log "Updating decidim webpacker config" && bin/rails decidim:webpacker:install
log "Installing decidim new migrations" && bin/rails decidim:choose_target_plugins && bin/rails railties:install:migrations
log "Updating application" && bin/update

exit 0
