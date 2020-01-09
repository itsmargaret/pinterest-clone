class CreateBoardFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :board_follows do |t|
      t.integer :follower_id, null: false
      t.integer :board_id, null: false 

      t.timestamps
    end

    add_index :board_follows, [:board_id, :follower_id], unique: true
    add_index :board_follows, :follower_id
  end
end
