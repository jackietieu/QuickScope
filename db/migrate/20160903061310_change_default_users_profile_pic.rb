class ChangeDefaultUsersProfilePic < ActiveRecord::Migration
  def change
    change_column_default :users, :profile_image_url, "http://res.cloudinary.com/dnmknegr2/image/upload/c_scale,r_0,w_40/v1472882627/blank-profile-picture-973460_1280_eg7exu.png"
  end
end
