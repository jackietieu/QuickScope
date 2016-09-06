class RemoverDescriptionFromBusinesses < ActiveRecord::Migration
  def change
    remove_column :businesses, :description, :string
  end
end
