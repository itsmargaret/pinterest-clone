json.extract! user, :id, :email
json.authored_board_ids user.boards.pluck(:id)
json.authored_pin_ids user.pins.pluck(:id)