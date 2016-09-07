class Business < ActiveRecord::Base
  validates :name, :lat, :lng, :street_address, :city_state_address, presence: true
  validates :name, uniqueness: true

  has_many :reviews
  has_many :images
  has_many :taggings
  has_many :tags,
    through: :taggings,
    source: :tag

 def self.filter(tag_id)
    self.select('*')
        .joins(:taggings)
        .where('taggings.tag_id = ?', tag_id)
  end
end
