class Image < ActiveRecord::Base
  validates :business_id, :image_url, presence: true

  belongs_to :business
end
