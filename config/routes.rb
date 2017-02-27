Rails.application.routes.draw do

  root 'users#new'

  get '/logout', to: 'users#logout_user'
  
  resources :users do
    resources :surveys
  end

  resources :surveys do
    resources :questions
    resources :responses
  end

  resources :questions do
    resources :choices
    resources :answers
  end

  resources :answers do
    resources :choices
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
