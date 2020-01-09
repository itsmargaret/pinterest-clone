class Api::BoardFollowsController < ApplicationController
    def create 
        @board_follow = BoardFollow.new(board_follow_params)

        if @board_follow.save
            render 'api/boards/show'
        else 
            render json: @board_follow.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @board_follow = BoardFollow.find(params[:id])
        @board_follow.destroy
        render "api/boards/show"
    end 

    private 
    def board_follow_params 
        params.require(:board_follow).permit(:board_id, :follower_id)
    end 
end
