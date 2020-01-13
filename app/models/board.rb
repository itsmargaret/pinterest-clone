class Board < ApplicationRecord
    validates :title, :user_id, presence: true 
    validates :secret, inclusion: {in: [true, false]}

    belongs_to :user 

    has_many :board_follows

    has_many :pinnings

    has_many :followers, 
        through: :board_follows,
        source: :user 

    has_many :pins,
        through: :pinnings,
        source: :pin
end
