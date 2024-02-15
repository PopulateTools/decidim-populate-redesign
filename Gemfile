# frozen_string_literal: true

source "https://rubygems.org"

ruby RUBY_VERSION
REPO = 'https://github.com/decidim/decidim.git'
BRANCH = 'feature/redesign-staging'
# DECIDIM_VERSION = { git: REPO, branch: BRANCH }
DECIDIM_VERSION = "0.28.0"
DECIDIM_ANONYMOUS_PROPOSALS_VERSION = { git: "https://github.com/PopulateTools/decidim-module-anonymous_proposals", branch: "release/0.28-stable" }

gem "decidim", DECIDIM_VERSION
gem "decidim-conferences", DECIDIM_VERSION
gem "decidim-design", DECIDIM_VERSION
gem "decidim-initiatives", DECIDIM_VERSION
gem "decidim-templates", DECIDIM_VERSION

gem "decidim-anonymous_proposals", DECIDIM_ANONYMOUS_PROPOSALS_VERSION

gem "bootsnap", "~> 1.4"

gem "puma", ">= 6.3.1"
gem "dalli"

gem 'faker'

gem 'sidekiq'

gem "aws-sdk-s3", require: false

gem "matrix"

group :development, :test do
  gem "byebug", "~> 11.0", platform: :mri

  gem "decidim-dev", DECIDIM_VERSION

  gem "brakeman", "~> 6.1"
  gem "net-imap", "~> 0.2.3"
  gem "net-pop", "~> 0.1.1"
  gem "net-smtp", "~> 0.3.1"
  gem "parallel_tests", "~> 4.2"
end

group :development do
  gem "letter_opener_web", "~> 2.0"
  gem "listen", "~> 3.1"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "~> 4.2"
end

group :production do
end

# Use Redis for Action Cable
gem 'redis', '~> 4.0'
