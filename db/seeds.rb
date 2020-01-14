# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
demo_user = User.create!(email: "demo@email.com", password: "123456")
file1 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/demoprofile.jpg')
demo_user.photo.attach(io: file1, filename: 'demoprofile.jpg')

user2 = User.create!(email: "user2@email.com", password: "123456")
file2 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/profile2.jpg')
user2.photo.attach(io: file2, filename: 'profile2.jpg')


Board.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('boards')
Board.create!(title: "gardening", secret: false, user_id: 1)
Board.create!(title: "fashion", secret: false, user_id: 2)
Board.create!(title: "conspiracy theories", secret: false, user_id: 1)


Pin.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('pins')
pin1 = Pin.create!(title: "succulents", url: "http://succulents.com/",
        description: "you can probably keep these alive",
        author_id: 1)
file3 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/succulent.jpg')
pin1.photo.attach(io: file3, filename: 'succulent.jpg')

pin2 = Pin.create!(title: "shoes",
        url: "https://allthatsinteresting.com/fascinating-history-footwear",
        author_id: 2)
file4 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/shoes.jpg')
pin2.photo.attach(io: file4, filename: 'shoes.jpg')

pin3 = Pin.create!(title: "the pyramids",
        url: "https://io9.gizmodo.com/10-bizarre-theories-about-the-pyramids-that-dont-involv-1648634533",
        author_id: 1)
file5 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pyramid.jpg')
pin3.photo.attach(io: file5, filename: 'pyramid.jpg')

Pinning.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('pinnings')
Pinning.create!(board_id: 1, pin_id: 1)
Pinning.create!(board_id: 2, pin_id: 2)
Pinning.create!(board_id: 3, pin_id: 3)
