json.boards do 
    @boards.each do |board|
        json.set! board.id do 
            json.extract! board, :id, :title, :pin_ids
        end 
    end 
end

json.pins do 
    @boards.each do |board|
        board.pins.each do |pin|
            json.set! pin.id do 
                json.extract! pin, :id, :url
                json.imageUrl url_for(pin.photo)
            end 
        end
    end
end 