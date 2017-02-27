module UsersHelper

	def login(user)
		session[:current_user_id] = user.id
	end

	def logout
		session[:current_user_id] = nil
	end

	def current_user
    @current_user ||= User.find_by(id: session[:current_user_id])
	end 

	def logged_in?
		!current_user.nil?
	end

end
