class Api::BoardsController < ApplicationController
    def index
        #review this w Ronil
        query = params[:query]
        @boards = Board.where("name LIKE %?%") 
    end 

    def create
        @board = Board.new(board_params)
        @board.user_id = current_user.id 
        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end 

    def show
    end 

    def update
    end 

    def destroy
    end 

    private 
    def board_params
        params.require(:board).permit(:title, :secret)
    end 
end
