class Location < ApplicationRecord
    has_many :venues, dependent: :destroy
    has_many :users, through: :venues

    validates :city, presence: true
    validates :state, presence: true

end
