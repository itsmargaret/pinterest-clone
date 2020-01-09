class Api::PinsController < ApplicationController
    before_action :require_logged_in 

    def index
        if params[:user_id] 
            @pins = current_user.pins
        else 
            @pins = Pin.all 
        end 
        render 'api/pins/index'
    end 

    def create
        @pin = Pin.new(pin_params)
        @pin.user_id = current_user.id 
        if @pin.save
            render 'api/pins/show'
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end 

    def show
        @pin = Pin.find(params[:id])
        render 'api/pins/show'
    end 

    def update
        @pin = Pin.find(params[:id])
        if @pin.update(pin_params)
            render 'api/pins/show'
        else 
            render json: @pin.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @pin = current_user.pins.find(params[:id])
        @pin.destroy
        render {}
    end 

    private 
    def pin_params
        params.require(:pin).permit(:title, :url, :description)
    end
end
