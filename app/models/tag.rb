class Tag < ActiveRecord::Base
  has_many :taggings
  has_many :businesses,
    through: :taggings,
    source: :business
end
