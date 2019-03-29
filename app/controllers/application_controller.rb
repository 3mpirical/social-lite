class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        # before_action :authenticate_user!, except: [:devise_controller?]
        before_action :configure_permitted_params, if: :devise_controller?

        protected
                def configure_permitted_params
                        devise_parameter_sanitizer.permit(:sign_up, keys: [:messaging_background, :image, :name])
                end
end
