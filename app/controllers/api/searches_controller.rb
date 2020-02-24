class SearchesController < ApplicationController

    def index
        query = params[:query]
        @pins = Pin.where('name LIKE %?%')
    end
end
