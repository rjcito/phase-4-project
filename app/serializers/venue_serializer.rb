class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :review, :location_id
  
  
end
