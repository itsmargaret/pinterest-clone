json.partial! 'api/pins/pin', pin: @pin 
json.author User.find(@pin.author_id)