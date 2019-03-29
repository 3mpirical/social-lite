class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.belongs_to :user, foreign_key: true
      t.string :mood
      t.text :text
      t.string :picture

      t.timestamps
    end
  end
end
