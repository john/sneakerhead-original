Rails.application.routes.draw do
  root 'home#index'
  devise_for :users
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      devise_for :users, controllers: {
        registrations: 'api/v1/registrations',
        sessions: 'api/v1/sessions'
      }

      resources :search
    end
  end
  # mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

end
