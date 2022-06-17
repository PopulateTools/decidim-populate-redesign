#!/bin/bash

# handle kill signs
trap "echo; exit 1" INT TERM

function log() {
  local columns=$(tput cols)
  local text="$1"

  printf '=%.0s' $(seq 1 ${columns})
  printf "%*s\n" $(((${#text}+$columns)/2)) "$text"
  printf '=%.0s' $(seq 1 ${columns})
}


LOCAL_DECIDIM_SHA=$( grep revision Gemfile.lock | awk '{print $2}')
REMOTE_DECIDIM_SHA=$(git ls-remote https://github.com/decidim/decidim.git | grep feature/redesign-staging)

if [[ $LOCAL_DECIDIM_SHA == $REMOTE_DECIDIM_SHA ]]; then
  log "Local and remote Decidim SHA match. Aborting."
  exit 0
fi

log "Remove previous Gemfile.lock (testing)" && rm Gemfile.lock && bundle install
log "Lock Gemfile for Linux too" && bundle lock --add-platform x86_64-linux
log "Clear packages" && rm -rf package*
log "Updating decidim webpacker config" && bin/rails decidim:webpacker:install
log "Installing decidim new migrations" && bin/rails decidim:choose_target_plugins && bin/rails railties:install:migrations
log "Updating application" && gem install bundler --conservative
