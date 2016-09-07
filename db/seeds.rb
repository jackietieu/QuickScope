# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# TEST DATA

Tag.create(name: "Food")
Tag.create(name: "Nightlife")
Tag.create(name: "Restaurant")
Tag.create(name: "Shopping")
Tag.create(name: "Arts & Entertainment")

User.create(username: "StephCurry", password: "123456")
User.create(username: "Kobe", password: "abc123")
User.create(username: "Rick", password: "abc123")
User.create(username: "Morty", password: "abc123")


Business.create(name: "Whole Foods Market SoMa", lat: 37.781150, lng: -122.399778, street_address: "399 4th St", city_state_address: "San Francisco, CA 94107", profile_image_url:"http://res.cloudinary.com/dnmknegr2/image/upload/v1473178655/90s_jmkn6b.jpg")
Tagging.create(business_id: 1, tag_id: 1)
Tagging.create(business_id: 1, tag_id: 4)
Review.create(business_id: 1, user_id: 3, rating: 4, content: "vegetables are hella fresh")
Review.create(business_id: 1, user_id: 2, rating: 3, content: "cashier could've been nice imo")

Business.create(name: "In-N-Out Burger", lat: 37.807706, lng: -122.418728, street_address: "333 Jefferson St", city_state_address: "San Francisco, CA 94133", profile_image_url:"http://res.cloudinary.com/dnmknegr2/image/upload/v1473178655/innout_lasqux.jpg")
Tagging.create(business_id: 2, tag_id: 1)
Tagging.create(business_id: 2, tag_id: 3)
Review.create(business_id: 2, user_id: 1, rating: 5, content: "animal fries r bomb")
Review.create(business_id: 2, user_id: 3, rating: 4, content: "wish i could give it 6 stars tbh")
Review.create(business_id: 2, user_id: 2, rating: 5, content: "BANANA PEPPERS ARE A MUST")
Review.create(business_id: 2, user_id: 4, rating: 5, content: "if you don't get grilled onions, you're crazy")
Image.create(business_id: 2, image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/c_scale,h_200/v1473267361/innout1_il9d2b.jpg")
Image.create(business_id: 2, image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/c_scale,h_200/v1473267361/innout2_i8nhh1.jpg")
Image.create(business_id: 2, image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/c_scale,h_200/v1473267361/innout3_ibowb6.jpg")

Business.create(name: "Century San Francisco Centre 9", lat: 37.783826, lng: -122.405800, street_address: "845 Market St, 5th Fl", city_state_address: "San Francisco, CA 94103", profile_image_url:"http://res.cloudinary.com/dnmknegr2/image/upload/v1473178655/ls_vmfxgl.jpg")
Tagging.create(business_id: 3, tag_id: 2)
Tagging.create(business_id: 3, tag_id: 5)
Review.create(business_id: 3, user_id: 4, rating: 4, content: "cozy seats are the bestttt")
Review.create(business_id: 3, user_id: 1, rating: 3, content: "$7 for soda LOL")


# ACTUAL BUSINESSES
Business.create(name: "Gelateria Naia", lat: 37.799810, lng: -122.409228, street_address: "520 Columbus Ave", city_state_address: "San Francisco, CA 94133", profile_image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/v1473141688/gelateria_naia_eyjx3r.jpg")
Tagging.create(business_id: 4, tag_id: 1)
Review.create(business_id: 4, user_id: 4, rating: 4, content: "wow it's so good")
Review.create(business_id: 4, user_id: 1, rating: 3, content: "makes me want to move to Italy!!")

Business.create(name: "Holy Gelato!", lat: 37.762327, lng: -122.465989, street_address: "1392 9th Ave", city_state_address: "San Francisco, CA 94122", profile_image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/v1473141688/holy_gelato_nq5rty.jpg")
Tagging.create(business_id: 5, tag_id: 1)
Review.create(business_id: 5, user_id: 2, rating: 5, content: "literally better than chocolate")
Review.create(business_id: 5, user_id: 3, rating: 4, content: "the pistachio will get you hooked")

Business.create(name: "La Copa Loca!", lat: 37.755594, lng: -122.417848, street_address: "3150 22nd St", city_state_address: "San Francisco, CA 94110", profile_image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/v1473141688/lacopapoca_xcje5g.jpg")
Tagging.create(business_id: 6, tag_id: 1)
Review.create(business_id: 6, user_id: 1, rating: 5, content: "i sold my house for this")
Review.create(business_id: 6, user_id: 2, rating: 4, content: "i should've tried gelato sooner!!!")

Business.create(name: "Lush Gelato", lat: 37.800671, lng: -122.408856, street_address: "576 Union St", city_state_address: "San Francisco, CA 94133", profile_image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/v1473141688/lush_gelato_rmsknu.jpg")
Tagging.create(business_id: 7, tag_id: 1)
Review.create(business_id: 7, user_id: 3, rating: 4, content: "better than ice cream for sure")
Review.create(business_id: 7, user_id: 1, rating: 3, content: "my gelato kind of melted")

Business.create(name: "Mr. Smith's", lat: 37.779977, lng: -122.412254, street_address: "34 7th St", city_state_address: "San Francisco, CA 94103", profile_image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/v1473143561/mrsmiths_klc2mw.jpg")
Tagging.create(business_id: 8, tag_id: 2)
Review.create(business_id: 8, user_id: 2, rating: 5, content: "great vibes")
Review.create(business_id: 8, user_id: 4, rating: 4, content: "everyone is so nice here!")

Business.create(name: "Temple Nightclub", lat: 37.787891, lng: -122.397171, street_address: "540 Howard St", city_state_address: "San Francisco, CA 94105", profile_image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/v1473143561/temple_oso79h.jpg")
Tagging.create(business_id: 9, tag_id: 2)
Review.create(business_id: 9, user_id: 4, rating: 3, content: "bouncer was kinda mean, didn't trust my id")
Review.create(business_id: 9, user_id: 3, rating: 2, content: "the music is alright here; it's all top 40's!")

Business.create(name: "Rye", lat: 37.786757, lng: -122.414601, street_address: "688 Geary St", city_state_address: "San Francisco, CA 94102", profile_image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/v1473143561/rye_honktk.jpg")
Tagging.create(business_id: 10, tag_id: 2)
Review.create(business_id: 10, user_id: 4, rating: 5, content: "really nice looking bar here!")
Review.create(business_id: 10, user_id: 2, rating: 4, content: "the drinks are strong, would definitely recommend!")

Business.create(name: "Noc Noc", lat: 37.771775, lng: -122.431401, street_address: "557 Haight St", city_state_address: "San Francisco, CA 94117", profile_image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/v1473143561/nocnoc_ewabna.jpg")
Tagging.create(business_id: 11, tag_id: 2)
Review.create(business_id: 11, user_id: 3, rating: 5, content: "the drinks aren't watered down, i love it!")
Review.create(business_id: 11, user_id: 4, rating: 4, content: "the bartenders here are awesome")

Business.create(name: "The View", lat: 37.784998, lng: -122.404331, street_address: "780 Mission St", city_state_address: "San Francisco, CA 94103", profile_image_url: "http://res.cloudinary.com/dnmknegr2/image/upload/v1473143561/theview_n4e70q.jpg")
Tagging.create(business_id: 12, tag_id: 2)
Review.create(business_id: 12, user_id: 3, rating: 4, content: "they even have darts here!")
Review.create(business_id: 12, user_id: 2, rating: 4, content: "great view at this spot!!!")
