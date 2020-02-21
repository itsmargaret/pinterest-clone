class Api::PinsController < ApplicationController
    before_action :require_logged_in 

    def index
        if params[:user_id] 
            @pins = Pin.where(author_id: params[:user_id])
            @boards = []
        else 
            @pins = Pin.all 
            @boards = Board.where(user_id: current_user.id)
        end 
        render 'api/pins/index'
    end 

    def create
        @pin = Pin.new(pin_params)
        @pin.author_id = current_user.id 
        if @pin.save
            render 'api/pins/show'
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end 

    def show
        @pin = Pin.find(params[:id])
        # @pin.author = User.find(id: @pin.author_id).email.split("a")[0]
        render 'api/pins/show'
    end 

    def update
        @pin = Pin.find(params[:id])
        if @pin.update(pin_params) && current_user.id == @pin.author_id
            render 'api/pins/show'
        else 
            render json: @pin.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @pin = Pin.find(params[:id])
        if current_user.id == @pin.author_id
            @pin.destroy
            render 'api/pins/show'
        else 
            render json: @pin.errors.full_messages, status: 422
        end 
    end 

    private 
    def pin_params
        params.require(:pin).permit(:title, :url, :description, :photo, :author_id, board_ids: [])
    end
end
