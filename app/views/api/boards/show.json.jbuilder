json.board do 
    json.extract! @board, :id, :title, :secret, :user_id, :pin_ids
end 

json.pins do 
    @board.pins.each do |pin|
        json.set! pin.id do 
            json.extract! pin, :id, :url
            json.imageUrl url_for(pin.photo)
        end 
    end
end 