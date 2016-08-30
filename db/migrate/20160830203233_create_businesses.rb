class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false, index: { unique: true }
      t.string :description, null: false, index: { unique: true }
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :address, null: false
      t.string :profile_image_url

      t.timestamps null: false
    end
  end
end
