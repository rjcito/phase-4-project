class EventSerializer < ActiveModel::Serializer
  attributes :id, :event

  belongs_to :venue
end
