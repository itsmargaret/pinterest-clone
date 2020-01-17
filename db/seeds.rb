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

user2 = User.create!(email: "TisTheSeaSun@email.com", password: "123456")
file2 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/profile2.jpg')
user2.photo.attach(io: file2, filename: 'profile2.jpg')

user3 = User.create!(email: "LifeIsGourd@email.com", password: "123456")
file3 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/lifeisgourd.jpg')
user3.photo.attach(io: file3, filename: 'lifeisgourd.jpg')

user4 = User.create!(email: "BarbeCute@email.com", password: "123456")
file4 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/barbecute.jpg')
user4.photo.attach(io: file4, filename: 'barbecute.jpg')

user5 = User.create!(email: "VinoHowToParty@email.com", password: "123456")
file5 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/vinohowtoparty.jpg')
user5.photo.attach(io: file5, filename: 'vinohowtoparty.jpg')


Board.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('boards')
Board.create!(title: "butter beerlieve it", secret: false, user_id: 1)
Board.create!(title: "overpacking peanut", secret: false, user_id: 2)
Board.create!(title: "another sun bites the dust", secret: false, user_id: 2)
Board.create!(title: "Can't be-leaf it", secret: false, user_id: 3)
Board.create!(title: "Unbe-leaf-able", secret: false, user_id: 3)
Board.create!(title: "nice to meat you", secret: false, user_id: 4)
Board.create!(title: "let's ketchup", secret: false, user_id: 4)
Board.create!(title: "all up in my grill", secret: false, user_id: 4)
Board.create!(title: "Pour decisions", secret: false, user_id: 5)


Pin.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('pins')
pin6 = Pin.create!(title: "How long does wine last?", url: "https://www.kitchensanity.com/food/does-wine-go-bad/",
        description: "Does wine go bad? All wines go bad and expire with time. Once a bottle is opened it can spoil within days. If exposed to heat, wine can go bad and won't last a few hours.",
        author_id: 5)
file6 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/wine8.jpg')
pin6.photo.attach(io: file6, filename: 'wine8.jpg')

pin7 = Pin.create!(title: "Bacon Wrapped Armadillo Eggs", url: "heyhrillhey.com",
        description: "Bacon Wrapped Armadillo Eggs are like a jalapeno popper meatball mashup. Filling enough to be a main dish, but portable enough to make as appetizers, snacks, or tailgating munchies. #armadilloeggs #smokedmeats #smokerrecipes",
        author_id: 4)
file7 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/bbq5.jpg')
pin7.photo.attach(io: file7, filename: 'bbq5.jpg')

pin8 = Pin.create!(title: "wine & cheese", url: "http://foodiecitynetwork.com/wine-cheese-tasting/",
        description: "",
        author_id: 5)
file8 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/wine5.png')
pin8.photo.attach(io: file8, filename: 'wine5.png')

pin9 = Pin.create!(title: "pumpkin puns", url: "https://therightwording.com/best-pumpkin-puns-and-quotes-to-make-you-the-pun-king/",
        description: "Best Pumpkin Puns And Quotes, Halloween and Fall Pun One Liners and Jokes #pumpkinpuns #halloweenpuns #fallpuns #autumnpuns #pumpkinspice",
        author_id: 3)
file9 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/fall5.jpg')
pin9.photo.attach(io: file9, filename: 'fall5.jpg')

pin10 = Pin.create!(title: "Best beach puns", url: "https://itsmejd.com/best-beach-puns-quotes-perfect-instagram-caption/",
        description: "",
        author_id: 2)
file10 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/vaca7.jpg')
pin10.photo.attach(io: file10, filename: 'vaca7.jpg')

pin11 = Pin.create!(title: "Fall sayings", url: "https://www.clumsycrafter.com/fall-sayings/",
        description: "Fall Sayings and autumn sayings that are perfect to help you make cute fall crafts and diy projects.",
        author_id: 3)
file11 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/fall6.png')
pin11.photo.attach(io: file11, filename: 'fall6.png')

pin12 = Pin.create!(title: "wine", url: "https://www.etsy.com/ca/listing/615808404/stainless-steel-wine-tumblers-with-lid",
        description: "",
        author_id: 5)
file12 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/wine10.jpg')
pin12.photo.attach(io: file12, filename: 'wine10.jpg')

pin13 = Pin.create!(title: "33 Travel puns", url: "https://www.pinterest.com/pin/162974080250448683/",
        description: "",
        author_id: 2)
file13 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/vaca4.png')
pin13.photo.attach(io: file13, filename: 'vaca4.png')

pin14 = Pin.create!(title: "wine", url: "https://www.etsy.com/listing/632172463/custom-laser-engraved-funny-wine-tumbler?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=wine+tumbler&ref=sr_gallery-1-22&organic_search_click=1&frs=1&col=1",
        description: "",
        author_id: 5)
file14 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/wine3.jpg')
pin14.photo.attach(io: file14, filename: 'wine3.jpg')

pin15 = Pin.create!(title: "31 Fall Puns", url: "https://www.elitedaily.com/p/31-fall-puns-for-instagram-captions-because-if-youve-got-it-haunt-it-2898153/amp",
        description: "With autumn finally in full swing, there's so much to share with your Instagram followers. Trees are bursting with bright colors, seasonal drinks are everywhere to be found, and it's finally cool enough to wear that adorable scarf you bought at the…",
        author_id: 3)
file15 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/fall4.jpg')
pin15.photo.attach(io: file15, filename: 'fall4.jpg')

pin16 = Pin.create!(title: "Food pun", url: "https://www.etsy.com/listing/585339594/food-pun-summer-wall-art-bbq-sign",
        description: "",
        author_id: 4)
file16 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/bbq3.jpg')
pin16.photo.attach(io: file16, filename: 'bbq3.jpg')

pin17 = Pin.create!(title: "Travel", url: "https://streetsbeatseats.com/travel-captions-for-instagram/",
        description: "",
        author_id: 2)
file17 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/vaca10.jpg')
pin17.photo.attach(io: file17, filename: 'vaca10.jpg')

pin18 = Pin.create!(title: "fall-themed", url: "http://rachelpitzel.com/2018/09/07/30-perfect-fall-themed-insta-captions/",
        description: "This time of year is cozy and amazing. The leaves change color and shed to remind us that letting go is healthy, and beautiful. I love all the wonderful traditions associated with Autumn, and the fact that it means we're a little closer to Christmas!",
        author_id: 3)
file18 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/fall7.jpg')
pin18.photo.attach(io: file18, filename: 'fall7.jpg')

pin19 = Pin.create!(title: "Seas the day", url: "http://www.cafepress.com/+seas_the_day_funny_pun_tote_bag,453415109",
        description: "",
        author_id: 2)
file19 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/vaca.jpg')
pin19.photo.attach(io: file19, filename: 'vaca.jpg')

pin20 = Pin.create!(title: "Havana good time", url: "https://exclothes.com/product/havana-good-time-funny-island-vacation-pun-t-shirt?item_group_id=468585",
        description: "",
        author_id: 2)
file20 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/vaca2.jpg')
pin20.photo.attach(io: file20, filename: 'vaca2.jpg')

pin21 = Pin.create!(title: "harry potter quotes", url: "http://clarissaquotesblog.chicloth.ru/336188-trendy-quotes-harry-potter-snape-funny-ideas.html",
        description: "",
        author_id: 1)
file21 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/hp5.jpg')
pin21.photo.attach(io: file21, filename: 'hp5.jpg')

pin22 = Pin.create!(title: "Harry Potter quotes", url: "http://keylaquotesmagazine.salaovirtual.ru/870082-40-ideas-quotes-harry-potter-love-truths-for-2019.html",
        description: "",
        author_id: 1)
file22 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/hp10.png')
pin22.photo.attach(io: file22, filename: 'hp10.png')

pin23 = Pin.create!(title: "best beach quotes", url: "https://www.pinterest.com/pin/616922848935148923/",
        description: "",
        author_id: 2)
file23 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/vaca8.jpg')
pin23.photo.attach(io: file23, filename: 'vaca8.jpg')

pin24 = Pin.create!(title: "wine puns", url: "https://itscominguprosie.com/products/wine-pun-coasters",
        description: "",
        author_id: 5)
file24 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/wine7.jpg')
pin24.photo.attach(io: file24, filename: 'wine7.jpg')

pin25 = Pin.create!(title: "puns", url: "http://www.punplex.com/",
        description: "",
        author_id: 2)
file25 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/vaca9.jpg')
pin25.photo.attach(io: file25, filename: 'vaca9.jpg')

pin26 = Pin.create!(title: "cookies", url: "https://www.instagram.com/p/Bt16_r9A87P/?utm_source=ig_share_sheet&igshid=18bwl12t9mwhm",
        description: "",
        author_id: 5)
file26 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/wine8.jpg')
pin26.photo.attach(io: file26, filename: 'wine8.jpg')

pin27 = Pin.create!(title: "this list of wine puns is a real corker", url: "https://allwording.com/wine-puns/",
        description: "",
        author_id: 5)
file27 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/wine.jpg')
pin27.photo.attach(io: file27, filename: 'wine.jpg')

pin28 = Pin.create!(title: "wine", url: "https://www.teepublic.com/t-shirt/1188881-funny-chemistry-wine-pun-t-shirt",
        description: "",
        author_id: 5)
file28 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/wine9.jpg')
pin28.photo.attach(io: file28, filename: 'wine9.jpg')

pin29 = Pin.create!(title: "The Grillfather", url: "https://www.bossygirldesigns.com/products/the-grill-father-a-bbq-you-cant-refuse-apron",
        description: "",
        author_id: 4)
file29 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/bbq7.jpg')
pin29.photo.attach(io: file29, filename: 'bbq7.jpg')

pin30 = Pin.create!(title: "Fall quote", url: "https://www.kristenkayjohnson.com/",
        description: "",
        author_id: 3)
file30 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/fall7.jpg')
pin30.photo.attach(io: file30, filename: 'fall7.jpg')

pin31 = Pin.create!(title: "turn grills on", url: "https://www.loadette.com/shop/bbq-cut-file-i-turn-grills-on-svg-barbecue-cut-file-quote-fun-bbq-pun-cut-file/",
        description: "",
        author_id: 4)
file31 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/bbq8.jpg')
pin31.photo.attach(io: file31, filename: 'bbq8.jpg')

pin32 = Pin.create!(title: "movies", url: "https://movieplus.news/harry-potter-10-snape-logic-memes-only-true-potterheads-understand/",
        description: "",
        author_id: 1)
file32 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/hp5.jpg')
pin32.photo.attach(io: file32, filename: 'hp5.jpg')

pin33 = Pin.create!(title: "These fall puns will leaf you smiling", url: "https://allwording.com/fall-puns/",
        description: "",
        author_id: 3)
file33 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/fall4.jpg')
pin33.photo.attach(io: file33, filename: 'fall4.jpg')

pin34 = Pin.create!(title: "beach puns", url: "https://shop.saltypun.com/collections/beach-puns",
        description: "",
        author_id: 2)
file34 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/vaca.jpg')
pin34.photo.attach(io: file34, filename: 'vaca.jpg')

pin35 = Pin.create!(title: "nothing is im-pasta-ble", url: "https://www.zazzle.com/nothing_is_impastable_cute_pasta_pun_poster-228992965597467799?rf=238828743846288366&tc=287324087761556752",
        description: "",
        author_id: 4)
file35 = open('https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/pins/bbq6.jpeg')
pin35.photo.attach(io: file35, filename: 'bbq6.jpeg')



Pinning.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('pinnings')
Pinning.create!(board_id: 9, pin_id: 1) 
Pinning.create!(board_id: 6, pin_id: 2) 
Pinning.create!(board_id: 9, pin_id: 3)  
Pinning.create!(board_id: 4, pin_id: 4)  
Pinning.create!(board_id: 2, pin_id: 5)  
Pinning.create!(board_id: 5, pin_id: 6)  
Pinning.create!(board_id: 9, pin_id: 7)  
Pinning.create!(board_id: 3, pin_id: 8)  
Pinning.create!(board_id: 9, pin_id: 9)  
Pinning.create!(board_id: 4, pin_id: 10) 
Pinning.create!(board_id: 7, pin_id: 11)  
Pinning.create!(board_id: 2, pin_id: 12)  
Pinning.create!(board_id: 5, pin_id: 13)  
Pinning.create!(board_id: 3, pin_id: 14)  
Pinning.create!(board_id: 2, pin_id: 15)  
Pinning.create!(board_id: 1, pin_id: 16) 
Pinning.create!(board_id: 1, pin_id: 17) 
Pinning.create!(board_id: 3, pin_id: 18)  
Pinning.create!(board_id: 9, pin_id: 19)  
Pinning.create!(board_id: 2, pin_id: 20)  
Pinning.create!(board_id: 9, pin_id: 21)  
Pinning.create!(board_id: 9, pin_id: 22)  
Pinning.create!(board_id: 9, pin_id: 23)  
Pinning.create!(board_id: 8, pin_id: 24)  
Pinning.create!(board_id: 4, pin_id: 25)  
Pinning.create!(board_id: 6, pin_id: 26)  
Pinning.create!(board_id: 1, pin_id: 27) 
Pinning.create!(board_id: 5, pin_id: 28)  
Pinning.create!(board_id: 3, pin_id: 29) 
Pinning.create!(board_id: 7, pin_id: 30)  
