class UsersController < ApplicationController

    skip_before_action :authorize, only: :create
   
    #POST /signup
    def create
        user = User.create(user_params)
        if user.save
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #GET /users
    def index
        @users = User.all
        render json: @users
    end


    



    #GET /me, stay logged in 
    def show
        user = User.find_by(id: session[:user_id])
        
        if user
            render json: user
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end




    def top_users
        venues  = Venue.all.filter { |venue| venue.name}    
        render json: venues, status: :created
    end




    private

    def user_params
        params.permit(:username, :password)
    end

end