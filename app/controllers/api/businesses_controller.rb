class Api::BusinessesController < ApplicationController
  def index
    #eventually implement filtering, return all biz for now
    #params[:filters][:search]
    #params[:filters][:filterId]
    search = params[:search]
    filter_id = params[:filterId]

    if filter_id == "0"
      @businesses = Business.where("name ILIKE ?", "%#{search}%")
    else
      @businesses = Business.where("name ILIKE ?", "%#{search}%")
                            .joins(:taggings)
                            .where("taggings.tag_id = ?", filter_id)
    end

    render json: @businesses
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

  def show
    #remember to setup average logic
    Business.find(params[:id]).reviews.average(:rating)
    @business = Business.find(params[:id]).reviews
  end

  private

  def business_params
    params.require(:business).permit(:name, :description, :lat, :lng, :address, :profile_image_url)
  end
end
