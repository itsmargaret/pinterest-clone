Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show] do 
      resources :boards, only: [:index]
    end 
    resource :session, only: [:create, :destroy]
    resources :boards, except: [:new, :edit] do 
      resources :board_follows, only: [:create, :destroy]
    end 
    resources :pins, except: [:new, :edit]
  end 
end
