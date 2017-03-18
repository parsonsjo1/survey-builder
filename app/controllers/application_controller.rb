class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user

  include UsersHelper
  include QuestionsHelper


  def authenticate_user
  	if !logged_in?
  		redirect_to new_user_path
  	end  	
  end
end
