class Api::FriendsController < ApplicationController
    
    def get_friends
        render( json: User.find(params[:id]).get_friends())
    end

    def add_friend
        puts current_user
        if(User.add_friend(current_user, params[:id]))
            render( json: "success" )
        else
            render( json: "failed")
        end
    end

    def remove_friend
        User.remove_friend(current_user, params[:id])
        render( json: "success")
    end

end
