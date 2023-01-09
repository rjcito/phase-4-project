# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Location.destroy_all
Hike.destroy_all


user1 = User.create(username: "rjcito", password: "12345")
user2 = User.create(username: "taevonnn", password: "54321")


location1 =Location.create(city: "Morrison", state: "CO")
location2 =Location.create(city: "Chicago", state: "IL")