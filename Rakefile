# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

task default: 'bundler:audit'

namespace :foreman do
  task :prod do
    sh "bundle exec foreman start -f Procfile"
  end

  task :dev do
    sh "bundle exec foreman start -f Procfile.dev"
  end
end