# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Tag.create(name: "Food")
Tag.create(name: "Nightlife")
Tag.create(name: "Restaurant")
Tag.create(name: "Shopping")
Tag.create(name: "Active Life")
Tag.create(name: "Arts & Entertainment")
Tag.create(name: "Automotive")
Tag.create(name: "Beauty & Spas")
Tag.create(name: "Education")
Tag.create(name: "Event Planning")
Tag.create(name: "Health & Medical")

User.create(username: "admin", password: "123456")
User.create(username: "user2", password: "abc123")

Business.create(name: "grocery store", description: "just a business", lat: 37.804107, lng: 122.407417, address: "251 Chestnut Street, San Francisco, CA 94133")
Tagging.create(business_id: 1, tag_id: 4)
Tagging.create(business_id: 1, tag_id: 6)

Business.create(name: "in n out", description: "foodie spot", lat: 37.771964, lng: -122.403135, address: "600 Townsend Street, San Francisco, CA 94103")
Tagging.create(business_id: 2, tag_id: 1)
Tagging.create(business_id: 2, tag_id: 3)

Business.create(name: "cool movie theatre", description: "dopeeeee theatreeee", lat: 37.811964, lng: -122.407135, address: "123 Faker Street, San Francisco, CA 94109")
Tagging.create(business_id: 3, tag_id: 2)
Tagging.create(business_id: 3, tag_id: 6)

Review.create(business_id: 1, user_id: 1, rating: 4, content: "vegetables are hella fresh")
Review.create(business_id: 1, user_id: 2, rating: 3, content: "cashier could've been nice imo")
Review.create(business_id: 2, user_id: 1, rating: 5, content: "animal fries r bomb")
Review.create(business_id: 2, user_id: 2, rating: 4, content: "wish i could give it 6 stars tbh")
Review.create(business_id: 3, user_id: 1, rating: 1, content: "watched twilight here; it sucked.")
