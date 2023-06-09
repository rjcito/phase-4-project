Rails.application.routes.draw do

  resources :events
  resources :venues, only: [:create, :update, :destroy, :index]
  resources :locations, only: [:create, :index, :show, :destroy]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "/findvenue", to: "venues#index"

  patch "/venues/:id", to: "venues#update"

  get "/topusers", to: "users#top_users"

  get "/venues/search/:word", to: "venues#search"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  



end
