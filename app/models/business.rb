class Business < ActiveRecord::Base
  validates :name, :description, :lat, :lng, :address, presence: true
  validates :name, uniqueness: true

  has_many :taggings
  has_many :reviews
  has_many :tags,
    through: :taggings,
    source: :tag

 # has avg_rating through ratings of all reviews

 def self.filter(tag_id)
    self.select('*')
        .joins(:taggings)
        .where('taggins.tag_id = ?', tag_id)
  end
end
