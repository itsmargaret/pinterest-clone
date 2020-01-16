class Pin < ApplicationRecord
    validates :title, :url, :author_id, null: false

    belongs_to :author, 
        foreign_key: :author_id, 
        class_name: :User 

    has_many :pinnings, 
        dependent: :destroy, 
        inverse_of: :pin

    has_many :boards,
        through: :pinnings,
        source: :board

    has_one_attached :photo
end
