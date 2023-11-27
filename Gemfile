# frozen_string_literal: true

source 'https://rubygems.org'

ruby RUBY_VERSION
REPO = 'https://github.com/decidim/decidim.git'
BRANCH = 'feature/redesign-staging'

DECIDIM_AWESOME_VERSION = { git: "https://github.com/decidim-ice/decidim-module-decidim_awesome.git" , branch: "redesign_admin-config" }

gem 'decidim', git: REPO, branch: BRANCH
gem 'decidim-conferences', git: REPO, branch: BRANCH
gem 'decidim-elections', git: REPO, branch: BRANCH
gem 'decidim-initiatives', git: REPO, branch: BRANCH
gem 'decidim-templates', git: REPO, branch: BRANCH
gem 'decidim-design', git: REPO, branch: BRANCH

gem "decidim-processes_admin_stats", git: "https://github.com/PopulateTools/decidim-module-processes_admin_stats.git", branch: "main"
gem "decidim-decidim_awesome", DECIDIM_AWESOME_VERSION

gem 'bootsnap', '~> 1.4'

gem "puma"
gem "dalli"

gem 'faker'

gem 'sidekiq'

gem 'letter_opener_web', '~> 2'
gem "aws-sdk-s3", require: false

gem "matrix"
gem 'net-smtp'
gem 'net-imap'
gem 'net-pop'

group :development, :test do
  gem 'decidim-dev', git: REPO, branch: BRANCH

  gem 'byebug', '~> 11.0', platform: :mri

  # Use latest simplecov from master until next version of simplecov is
  # released (greather than 0.18.5)
  # See https://github.com/decidim/decidim/issues/6230
end

group :development do
  gem 'listen', '~> 3.1'
  gem 'spring', '~> 2.0'
  gem 'spring-watcher-listen', '~> 2.0'
  gem 'web-console', '4.0.4'
end

# Use Redis for Action Cable
gem 'redis', '~> 4.0'
