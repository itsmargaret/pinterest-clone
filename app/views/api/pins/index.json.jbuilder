@pins.each do |pin|
    json.set! pin.id do 
        json.extract! pin, :id, :url
        json.imageUrl url_for(pin.photo)
    end 
end 