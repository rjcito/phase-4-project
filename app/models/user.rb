class User < ApplicationRecord
    has_many :venues, dependent: :destroy
    has_many :locations, through: :venues
    has_secure_password 

    validates :username, presence: true, uniqueness: true


    def locations
        venues = self.venues
        locations = venues.map(&:location).uniq
        return locations
    end
end
