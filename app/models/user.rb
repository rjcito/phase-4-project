class User < ApplicationRecord
    has_many :venues, dependent: :destroy
    has_many :locations, through: :venues
    has_secure_password # password=, password, authenticate
end
