Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  post "/api/search/users/" => "api/searches#user_search"
  get "/api/search/users/:id" => "api/searches#trim_user"

end
