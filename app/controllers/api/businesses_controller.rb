class Api::BusinessesController < ApplicationController
  def index
    #eventually implement filtering, return all biz for now
    #params[:filters][:search]
    #params[:filters][:filterId]
    @businesses = Business.all
  end

  def create
    @business = Business.new(business_params)

    if @business.save
      login(@business)
      render "api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  private

  def business_params
    params.require(:business).permit(:name, :description, :lat, :lng, :address, :profile_image_url)
  end
end
