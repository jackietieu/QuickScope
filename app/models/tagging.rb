class Tagging < ActiveRecord::Base
  belongs_to :business
  belongs_to :tag
end
