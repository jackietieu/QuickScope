class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :business_id, null: false, index: true
      t.string :image_url, null: false

      t.timestamps null: false
    end
  end
end
