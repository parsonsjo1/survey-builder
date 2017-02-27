class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    #Use user if found else create new user
    @user = User.find_by(email: params[:user][:email])
    @user = User.new(user_params) if !@user

    if @user.save
      #login user
      login(@user)
      redirect_to new_survey_path
    else
      render :new
    end
return

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
    render :new
    
  end

  private
    def user_params
      params.require(:user).permit(:email, :name)
    end

end
