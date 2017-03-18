class UsersController < ApplicationController
  before_action :redirect_user, only: [:new]
  skip_before_action :authenticate_user, only: [:new, :create]

  def new
    @user = User.new
  end

  def create

    #Use user if found else create new user
    @user = User.find_by(email: params[:user][:email])
    @user = User.create(user_params) if !@user

    if @user
      login(@user)
      redirect_to user_surveys_path(@user.id)
    else
      render :new
    end

  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def logout_user
    
    logout
    redirect_to new_user_path
    
  end

  private
    def user_params
      params.require(:user).permit(:email, :name)
    end

    def redirect_user
      if logged_in?
        redirect_to user_surveys_path(current_user.id)
      end
    end

end
