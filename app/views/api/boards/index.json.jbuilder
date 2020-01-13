@boards.each do |board|
    json.set! board.id do 
        json.extract! board, :id, :title
        json.pins board.pins
    end 
end