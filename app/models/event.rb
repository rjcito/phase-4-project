class Event < ApplicationRecord
    belongs_to :venue, dependent: :destroy
end
