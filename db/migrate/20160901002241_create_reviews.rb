class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :business_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.float :rating, null: false
      t.string :content, null: false

      t.timestamps null: false
    end
  end
end
