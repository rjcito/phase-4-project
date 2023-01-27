class LocationsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]


    def index
        locations = current_user.locations 
        render json: locations
    end 

    def show 
        location = current_user.locations.find(params[:id])
        render json: location
    end

    def create 
        location = Location.new(location_params)
        if location.save
            render json: location, status: 201
        else 
            render json: { errors: location.errors.full_messages }, status: 422
        end

    end

    def destroy
        if logged_in?
            location = Location.find_by(id: params[:id])
            if location
                location.destroy
                render json: { message: "Successfully Deleted :) " }
            else
                render json: {error: "Location not found"}, status: :not_found
            end
        else
            render json: {error: ["You must be logged in."]}
        end
    end




    private
    def location_params
        params.require(:location).permit(:city, :state)
    end
end
