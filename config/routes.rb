Rails.application.routes.draw do

  resources :venues, only: [:create, :update, :destroy, :index]
  resources :locations, only: [:create, :index, :show, :destroy]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/search", to: "venues#index"
  get "/findvenue", to: "venues#index"

  patch "/venues/:id", to: "venues#update"

  get "/topusers", to: "venues#topusers"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #TopUsers Create a custom route that returns the top users. The top users will be the users who have created the most venues (take the top three). The return of this action will be json rendered with the user information, including the venues. If your method returns more than three in the case of a tie, that is fine.

  # create route 
  # create method 
  # topUsers = the user with venue.count > 3 




end
