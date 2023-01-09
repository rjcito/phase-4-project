class Location < ApplicationRecord
    has_many :venues, dependent: :destroy
    has_many :users, through: :venues
end
