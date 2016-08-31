Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tags, only: [:index]

    resources :businesses, only: [:create, :index, :show] do
      resources :reviews, only: [:index, :create]
    end
  end

  root "static_pages#root"
end
