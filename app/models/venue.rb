class Venue < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :name, presence: true
  validates :review, presence: true
  validates :name, uniqueness: true
end
