class Business < ActiveRecord::Base
  validates :name, :description, :lat, :lng, :address, presence: true
  validates :name, uniqueness: true

  has_many :reviews
  has_many :ratings,
    through: :reviews
  has_many :tags,
    through: :taggings

 # has avg_rating through ratings of all reviews
end
