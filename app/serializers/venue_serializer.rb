class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :review
  has_one :user
  has_one :location
end
