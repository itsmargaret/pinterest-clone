json.pins do 
    @pins.each do |pin|
        json.set! pin.id do 
            json.extract! pin, :id, :url, :author_id
            json.imageUrl url_for(pin.photo)
        end 
    end
end 


json.boards do 
    @boards.each do |board| 
        json.set! board.id do 
            json.extract! board, :id, :title
        end 
    end
end 