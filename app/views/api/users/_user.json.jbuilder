json.extract! user, :id, :email
# json.imageUrl url_for(user.photo)
json.authoredBoardIds user.boards.pluck(:id)
json.authoredPinIds user.pins.pluck(:id)