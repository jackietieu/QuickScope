class AddDefaultPicToBusiness < ActiveRecord::Migration
  def change
    change_column_default :businesses, :profile_image_url, "http://res.cloudinary.com/dnmknegr2/image/upload/c_fill,g_xy_center,h_50,w_50,x_0,y_0/v1473119089/unsplash_527bf4b4ae00d_1_bjl0cq.jpg"
  end
end
