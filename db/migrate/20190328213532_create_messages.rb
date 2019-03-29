class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.references :from_user, class_name: "User"
      t.references :to_user, class_name: "User"

      t.timestamps
    end
  end
end
