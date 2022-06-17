#!/bin/bash

LOCAL_DECIDIM_SHA=$( grep revision Gemfile.lock | awk '{print $2}')
REMOTE_DECIDIM_SHA=$(git ls-remote https://github.com/decidim/decidim.git | grep feature/redesign-staging)

if [[ $LOCAL_DECIDIM_SHA == $REMOTE_DECIDIM_SHA ]]; then
  log "Local and remote Decidim SHA match. Aborting."
  exit 0
fi

rm -f Gemfile.lock &&
  bundle install &&
  bundle lock --add-platform x86_64-linux &&
  rm -rf package* &&
  bin/rails decidim:webpacker:install &&
  bin/rails decidim:choose_target_plugins &&
  bin/rails railties:install:migrations &&
  gem install bundler --conservative
