class Review < ActiveRecord::Base
  validates :content, :rating, presence: true

  belongs_to :business
  belongs_to :user
end
