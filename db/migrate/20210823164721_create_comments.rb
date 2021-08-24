class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :title
      t.text :description
      t.string :user_name

      t.timestamps
    end
  end
end
