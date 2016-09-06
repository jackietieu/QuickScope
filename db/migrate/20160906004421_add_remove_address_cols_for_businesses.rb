class AddRemoveAddressColsForBusinesses < ActiveRecord::Migration
  def change
    remove_column :businesses, :address, :string
    add_column :businesses, :street_address, :string, null: false
    add_column :businesses, :city_state_address, :string, null: false
  end
end
