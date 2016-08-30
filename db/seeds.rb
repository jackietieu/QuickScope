# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'admin', password: '123456')
Business.create(name: "testbusiness1", description: "just a business", lat: 37.804107, lng: 122.407417, address: "251 Chestnut Street, San Francisco, CA 94133", profile_image_url: "")
Business.create(name: "restaurant1", description: "foodie spot", lat: 37.771964, lng: -122.403135, address: "600 Townsend Street, San Francisco, CA 94103", profile_image_url: "")
