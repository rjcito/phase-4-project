class UserSerializer < ActiveModel::Serializer
  attributes :id, :username


  has_many :venues, serializer: VenueLocationSerializer
end
