# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
User.create!(email: "demo@email.com", password: "123456")
User.create!(email: "user2@email.com", password: "123456")

Board.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('boards')
Board.create!(title: "gardening", secret: false, user_id: 1)
Board.create!(title: "fashion", secret: false, user_id: 2)
Board.create!(title: "conspiracy theories", secret: false, user_id: 1)

Pin.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('pins')
Pin.create!(title: "succulents", url: "http://succulents.com/",
        description: "you can probably keep these alive",
        author_id: 1)
Pin.create!(title: "shoes",
        url: "https://allthatsinteresting.com/fascinating-history-footwear",
        author_id: 2)
Pin.create!(title: "the pyramids",
        url: "https://io9.gizmodo.com/10-bizarre-theories-about-the-pyramids-that-dont-involv-1648634533",
        author_id: 1)
