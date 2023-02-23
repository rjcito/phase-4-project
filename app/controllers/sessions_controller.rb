class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    #POST /login
    def create
        user = User.find_by(username: params[:username])#look up a user in the database
        if user&.authenticate(params[:password])
          #if user && user.authenticate(params[:password])
          session[:user_id] = user.id #store the authenticated user's id in the session
          render json: user
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        render json: { message: "You have been logged out" }
    end
end
