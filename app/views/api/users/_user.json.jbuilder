json.extract! user, :id, :email

if user.photo.attached? 
    json.imageUrl url_for(user.photo) 
else 
    json.imageUrl "https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/defaultprofile.jpg"
end 

json.authoredBoardIds user.boards.pluck(:id)

json.authoredPinIds user.pins.pluck(:id)