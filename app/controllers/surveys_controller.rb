require('securerandom')

class SurveysController < ApplicationController
  def index
    @surveys = Survey.all
  end

  def new

    @survey = Survey.new
    @surveys = Survey.all

  end

  def create

    @survey = Survey.create!(user_id: current_user.id, title: params[:title], color: "#CBE068", token: SecureRandom.uuid, is_active: false)
    redirect_to new_user_survey_path(current_user.id)

  end

  def show
  end

  def edit

    @survey = Survey.find(params[:id])

  end

  def update

    @survey = Survey.find(params[:id])
    @survey.update(survey_params)
    render json: @survey

  end

  def destroy

    @survey = Survey.find(params[:id])
    @survey.destroy
    redirect_to new_user_survey_path(current_user.id)

  end

  private
    def survey_params
      params.require(:survey).permit(:title, :color, :is_active)
    end

end
