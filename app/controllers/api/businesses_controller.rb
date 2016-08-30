class Api::BusinessesController < ApplicationController
  def create
    @business = Business.new(user_params)

    if @business.save
      login(@business)
      render "api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
