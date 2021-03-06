class Api::BoardsController < ApplicationController
    before_action :require_logged_in

    def index
        if params[:user_id] 
            @boards = Board.where(user_id: params[:user_id])(:pins)
        else 
            @boards = Board.all 
        end 
        render 'api/boards/index'
            
        #review this for backend search
        # query = params[:query]
        # @boards = Board.where("name LIKE %?%") 
    end 

    def create
        @board = Board.new(board_params)
        @board.user_id = current_user.id 
        if @board.save
            render 'api/boards/show'
        else
            render json: @board.errors.full_messages, status: 422
        end
    end 

    def show
        @board = Board.find(params[:id])
        if @board
            render 'api/boards/show'
        else 
            render json: ['Board does not exist'], status: 401
        end 
    end 

    def update
        @board = Board.find(params[:id])
        if @board.update(board_params) && current_user.id == @board.user_id
            render 'api/boards/show'
        else 
            render json: @board.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @board = Board.find(params[:id])
        if current_user.id == @board.user_id
            @board.destroy
            render 'api/boards/show'
        else 
            render json: @board.errors.full_messages, status: 422
        end 
    end 

    private 
    def board_params
        params.require(:board).permit(:title, :secret, :user_id)
    end 
end