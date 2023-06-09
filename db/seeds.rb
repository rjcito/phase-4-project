# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Location.destroy_all
Venue.destroy_all


user1 = User.create(username: "rjcito", password: "12345")
user2 = User.create(username: "taevonnn", password: "54321")


location1 =Location.create(city: "Denver", state: "CO")
location2 =Location.create(city: "Chicago", state: "IL")

venue1 = Venue.create(name: "Red Rocks Amphiteater", review: "This venue is the best outdoor venue in the world! ", user: user2, location: location1)
venue2 = Venue.create(name: "Concord Music Hall", review: "Saw Azealia Banks there! It was hot too hot inside. ", user: user1, location: location2)
venue3 = Venue.create(name: "The Mission Ballroom", review: "Couldn't have seen Lorde at a better venue. This place has a great set up. ", user: user2, location: location1)


event1 = Event.create(event: "Shakira En Concierto", venue_id: 77)
