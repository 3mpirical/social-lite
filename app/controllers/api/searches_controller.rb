class Api::SearchesController < ApplicationController
    def user_search
        render( json: User.search_users(params[:input]) )
    end

    def trim_user
        user = User.find(params[:id]);
        render( 
            json: {
                name: user.name,
                image: user.image,
                messaging_background: user.messaging_background,
                friends: user.friends,
        } )
    end
end
