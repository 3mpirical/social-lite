Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  post "/api/search/users/" => "api/searches#user_search"
  get "/api/search/users/:id" => "api/searches#trim_user"
  
  get "/api/friends/:id" => "api/friends#get_friends"
  post "/api/friends/:id" => "api/friends#add_friend"
  delete "/api/friends/:id" => "api/friends#remove_friend"

end
