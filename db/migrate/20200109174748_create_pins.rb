class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.text :description
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :pins, :author_id
  end
end
