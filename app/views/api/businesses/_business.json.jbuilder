json.extract! business, :id, :name, :description, :lat, :lng, :address, :profile_image_url
json.avg_rating business.reviews.average(:rating)
json.reviews business.reviews.count
