class AddFriendsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :friends, :text
  end
end
