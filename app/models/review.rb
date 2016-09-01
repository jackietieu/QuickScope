class Review < ActiveRecord::Base
  validates :content, :rating, presence: true

  belongs_to :business
  belongs_to :user

  #considering moving rating property to its own model for easy business association access
end
