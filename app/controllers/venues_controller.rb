class VenuesController < ApplicationController
    before_action :find_venue, only: [:update, :delete]

    #POST /venues
    def create
        if logged_in?
            venue = current_user.venues.build(venue_params)
            if venue.save
                render json: venue, status: 201
            else
            render json: { errors: venue.errors.full_messages }, status: 422
            end
        else
            render json: { errors: ["You must be logged in."] }
        end
    end

    #PATCH /venues/:id
    def update
        if logged_in?
            venue = Venue.find(params[:id])
            venue.update(venue_params)
            if venue.save
                render json: venue, status: 201
            else
                render json: {errors: venue.errors.full_messages }, status:422
            end
        else
            render json: {error: ["You must be logged in."]}
        end
    end


    def detroy
        if logged_in?
        venue = Venue.find_by(id: params[:id])
        venue.destroy
        head :no_content
        else
            render json: {error: ["You must be logged in."]}
        end
    end

    private

    def venue_params
        params.permit(:name, :review, :location_id)
    end
    
    def find_venue
        venue = Venue.find_by_id(params[:id])
    end


end
