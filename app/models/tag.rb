class Tag < ActiveRecord::Base
  has_many :businesses,
    through: :taggings
end
