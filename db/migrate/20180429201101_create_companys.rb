class CreateCompanys < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :cvr
      t.string :address
      t.string :city
      t.string :country
      t.string :phone
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
