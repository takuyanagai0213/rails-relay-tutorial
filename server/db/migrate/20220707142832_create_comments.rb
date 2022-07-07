class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :name, limit: 30
      t.integer :post_id

      t.timestamps
    end
  end
end
