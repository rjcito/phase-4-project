class VenuesController < ApplicationController
    before_action :find_venue, only: [:update, :destroy]

    def index
        venues = current_user.venues
        render json: venues #calling the render method with the json option will produce a JSON-formatted string of data which the controller can then use as the body of the response being sent back to the client. If we pass an aActive Record Object (in this case, our venues variable) this render method, it will be serialized as JSON data based on the attributes of the object. 
        
    end

    #POST /venues
    def create
        if logged_in?
            venue = current_user.venues.new(venue_params)
            if venue.save
                render json: venue, status: 201
            else
                render json: { errors: venue.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["You must be logged in."] }
        end
    end

    #PATCH /venues/:id
    def update
        venue = Venue.find(params[:id])
        if venue.user_id == current_user.id
            
            venue.update(venue_params)
            if venue.save
                render json: venue, status: 201
            else
                render json: {errors: venue.errors.full_messages }, status:422
            end
        else
            render json: {error: ["You are not the creator of that venue!"]}
        end
    end


    def destroy
        if logged_in?
            venue = Venue.find_by(id: params[:id])
            if venue.user_id == current_user.id
                venue.destroy
                head :no_content
            else
                render json: {error: "Venue not found"}, status: :not_found
            end
        else
            render json: {error: "You must be logged in."}
        end
    end

    def search
        #searched_venues = Venue.all.filter {|venue| venue.name.include?(params[:word])}
        searched_venues = Venue.where("LOWER(name) LIKE ?", "%#{params[:word].downcase}%")
        render json: searched_venues
        

    end





    private

    def venue_params
        params.require(:venue).permit(:name, :review, :location_id)
    end



    
    
    def find_venue
        venue = Venue.find_by_id(params[:id])
    end


end
