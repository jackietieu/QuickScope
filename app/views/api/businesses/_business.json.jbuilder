json.extract! business, :id, :name, :description, :lat, :lng, :address, :profile_image_url
json.avg_rating business.reviews.average(:rating).round(2)
json.reviews business.reviews.count
