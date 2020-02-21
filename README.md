# Pun-terest

[Link to Live Site](https://pinterest-aa.herokuapp.com/#/)

Pun-terest is a full-stack web application inspired by Pinterest. This site is a social media application that allows users to create, share, and discover "punny" images and links through browsing pins and pinning them to boards.

![alt text](app/assets/images/login-page.png "Login page")

## Technologies

### Languages

- Ruby
- SQL
- JavaScript
- HTML5
- CSS

### Frameworks & Platforms

- Rails
- PostgreSQL
- React.js
- Redux
- AWS

## Features

### Users

- Modals for sign-up and log-in; used CSS to prevent user from exiting a modal prior to valid login

```css
.session-modal-child {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-blend-mode: darken;
}
```

- Each user has a public profile page; a user can view any other user's profile, but can only update and delete their own

### Pins

- A responsive masonry style grid on the splash and profile pages
- Ability for the user to upload images via ActiveStorage and AWS, as well as, save them to boards. A pin must belong to a board at the time of creation

Model associations: 
```ruby
has_many :pinnings, 
    dependent: :destroy, 
    inverse_of: :pin

has_many :boards,
    through: :pinnings,
    source: :board
```

Controller:
```ruby
def create
    @pin = Pin.new(pin_params)
    @pin.author_id = current_user.id
    if @pin.save
        render 'api/pins/show'
    else
        render json: @pin.errors.full_messages, status: 422
    end
end
```

View:
```ruby
json.extract! pin, :id, :title, :url, :description, :author_id
json.imageUrl url_for(pin.photo)
json.author User.find(@pin.author_id)
json.boardId @pin.board_ids[0]
```

- Ability for the user to view other user pins and edit or delete their own pins

### Boards

- Modals for the user to create, edit, and delete boards

![alt text](app/assets/images/pin-modal.png "Pin modal")

## Future Plans

### Infinite Scroll

In order to improve scalability, infinite scroll will be implemented on the index page so that only a certain number of pins would be fetched from the database at a time.

### User and board follows

A user could follow specific boards. If a user follows another user, it would automatically subscribe them to all of that user's boards.

### Search

Add backend search function to allow a user to filter pins based on a search query.
