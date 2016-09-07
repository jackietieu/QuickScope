json.extract! business, :id, :name, :lat, :lng, :profile_image_url
json.streetAddress business.street_address
json.cityStateAddress business.city_state_address
json.avg_rating business.reviews.average(:rating).round(2)
json.reviews business.reviews.count
json.image_urls business.images.to_a
