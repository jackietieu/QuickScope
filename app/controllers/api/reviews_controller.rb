class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render "api/businesses/#{params[:businessId]}/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  #REMEMBER TO IMPLEMENT REVIEW_PARAMS
end
