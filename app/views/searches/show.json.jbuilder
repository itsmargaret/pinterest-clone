json.pins do
  json.array!(@pins) do |pin|
    json.id pin.id
    json.title pin.title
    json.url pin.url
    json.description pin.description
    json.imageUrl pin.imageUrl
    json.author_id pin.author_id
  end
end