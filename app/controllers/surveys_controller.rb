require('securerandom')

class SurveysController < ApplicationController
  def index
  end

  def new

    #@survey = Survey.new(user_id: current_user.id, title: "New Survey", color: "#CBE068", token: SecureRandom.uuid, is_active: false)
    @survey = Survey.find(1)    

  end

  def create
    
    render json: @survey

  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
