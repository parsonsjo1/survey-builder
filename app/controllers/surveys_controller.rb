require('securerandom')

class SurveysController < ApplicationController
  def index
  end

  def new

    @survey = Survey.find_by(id: 1)
    if !@survey    
      @survey = Survey.new(user_id: current_user.id, title: "New Survey", color: "#CBE068", token: SecureRandom.uuid, is_active: false)
    end
    
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
