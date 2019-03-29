class AddMessagingBackgroundToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :messaging_background, :string
  end
end
