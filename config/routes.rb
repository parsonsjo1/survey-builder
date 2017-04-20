Rails.application.routes.draw do

  # Take the user to their surveys. This will handle new users as well.
  root 'surveys#index'

  delete '/logout', to: 'users#logout_user'

  get '/surveys/send', to: 'surveys#send_survey'
  get '/responses/send', to: 'responses#send_receipt'

  get '/surveys/:token', to: 'responses#new'

  #put '/sidebar/questions/:id', to: 'sidebar#update'

  #namespace admin
  
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

  resources :choices do
    resources :questions
  end

  resources :answers do
    resources :choices
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
