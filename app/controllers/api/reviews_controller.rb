class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
  end

  #REMEMBER TO IMPLEMENT REVIEW_PARAMS
end
