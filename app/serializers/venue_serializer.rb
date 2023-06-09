class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :review, :location_id, :user_id

  belongs_to :user
  belongs_to :location
  
end
