@pins.each do |pin|
    json.set! pin.id do 
        json.extract! pin, :id, :url
        json.imageUrl url_for(pin.photo)
    end 
end 


# json.userBoards do 
#     @boards.each do |board| 
#         json.set! board.id do 
#             json.extract! board, :id, :title
#         end 
#     end
# end 