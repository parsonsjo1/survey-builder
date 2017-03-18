Rails.application.routes.draw do

  # Take the user to their surveys. This will handle new users as well.
  root 'surveys#index'

  delete '/logout', to: 'users#logout_user'

  #put '/sidebar/questions/:id', to: 'sidebar#update'

  #namespace admin
  
  resources :users do
    resources :surveys
  end

  resources :surveys do
    resources :questions
    resources :responses
  end

  #look into nested attributes

  resources :questions do
    resources :choices
    resources :answers
  end

  resources :answers do
    resources :choices
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
