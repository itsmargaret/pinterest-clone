class BoardFollow < ApplicationRecord
    validates :follower_id, presence: true, uniqueness: {scope: :board_id}
    validates :board_id, presence: true 

    belongs_to :board

    belongs_to :user, 
        foreign_key: :follower_id, 
        class_name: :User
end
