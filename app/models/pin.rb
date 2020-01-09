class Pin < ApplicationRecord
    validates :title, :url, :author_id, null: false

    belongs_to :author, 
        foreign_key: :author_id, 
        class_name: :User 

    has_one_attached :photo
end
