class Pinning < ApplicationRecord
    validates :pin_id, uniqueness: {scope: :board_id}
    # validates :board_id, presence: true 

    belongs_to :board

    belongs_to :pin
end
