class Venue < ApplicationRecord
  has_many :events
  belongs_to :user
  belongs_to :location

  validates :name, presence: true
  validates :review, presence: true
  validates :name, uniqueness: true

  def location_city
    self.location.city
  end

  def user_name
    self.user.username
  end



  
end
