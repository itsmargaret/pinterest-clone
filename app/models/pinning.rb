class Pinning < ApplicationRecord
    validates :pin_id, uniqueness: {scope: :board_id}

    belongs_to :board

    belongs_to :pin
end
