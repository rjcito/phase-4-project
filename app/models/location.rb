class Location < ApplicationRecord
    has_many :venues, dependent: :destroy
    has_many :users, through: :venues

    validates :city, presence: true
    validates :state, presence: true
    validates :city, uniqueness: true
    validates :state, uniqueness: true
    validates :state, length: { maximum:2 }
    validates :state, length: {minimum:2}



end
