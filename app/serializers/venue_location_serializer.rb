class VenueLocationSerializer < ActiveModel::Serializer
    attributes :id, :name, :review, :location_city, :user_name, :location_id
  
    belongs_to :location

end