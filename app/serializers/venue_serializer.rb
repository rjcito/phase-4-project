class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :review, :location_id, :user_id
  
  
end
