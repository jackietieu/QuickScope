class Business < ActiveRecord::Base
  validates :name, :description, :lat, :lng, :address, presence: true
  validates :name, uniqueness: true

  has_many :taggings
  has_many :reviews
  has_many :reviewers,
    through: :reviews,
    source: :user
  has_many :tags,
    through: :taggings,
    source: :tag

 def self.filter(tag_id)
    self.select('*')
        .joins(:taggings)
        .where('taggins.tag_id = ?', tag_id)
  end
end
