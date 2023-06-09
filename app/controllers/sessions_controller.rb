class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    #POST /login what is logged in? the ability to find a user and confirm that the user is you by a password we need to find a user that may match a username and we need to confirm that user matches the password that is stored 
    def create #creating a session aka session[:user_id]
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password]) #if the user exists needs to be checked first bc if user is nill and then you call .authenticate on nill you will get an error.
          #if user && user.authenticate(params[:password])
          session[:user_id] = user.id #store the authenticated user's id in the session
          render json: user
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    #DELETE /logout
    def destroy
        session.delete :user_id #we want to delete the session user id 
        render json: { message: "You have been logged out" }
    end
end
