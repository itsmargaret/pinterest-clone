class Api::PinningsController < ApplicationController
    def create
        @pinning = Pinning.new(pinning_params)
        if @pinning.save
            @pin = @pinning.pin
            render 'api/pins/show'
        else
            render json: @pinning.errors.full_messages, status: 400
        end
    end

    def destroy
      @pinning = Pinning.where(board_id: params[:pinning][:board_id], pin_id: params[:pinning][:pin_id])
      @pinning.destroy
      render 'api/pinnings/show'
    end 
    
  # def destroy
  #   @pinning = Pinning.where(board_id: params[:pinning][:board_id], pin_id: params[:pinning][:pin_id])
  #       @board = @pinning.board
  #       @pin = @pinning.pin
  #   if @pinning.destroy
  #     render 'api/pinnings/show'
  #   else
  #     render json: @pinning.errors.full_messages, status: 422
  #   end
  # end

  private

  def pinning_params
    params.require(:pinning).permit(:pin_id, :board_id)
  end
end
