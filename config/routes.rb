Rails.application.routes.draw do

  root 'surveys#new'
  
  get 'users/new'

  get 'users/create'

  get 'users/show'

  get 'users/edit'

  get 'users/update'

  get 'users/destroy'

  resources :surveys
  resources :questions
  resources :choices
  resources :responses
  resources :answers

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
