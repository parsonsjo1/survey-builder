require('securerandom')

class SurveysController < ApplicationController
  before_action :find_survey, only: [:show, :edit, :update, :destroy, :send_survey]

  def index
    #Look up surveys for the current user
    @surveys = Survey.where(user_id: current_user.id)
    @survey = Survey.new

  end

  def create

    @survey = Survey.create(user_id: current_user.id, title: params[:survey][:title], title_color: "black", description: "Description", color: "#CBE068", token: SecureRandom.uuid, is_active: false)
    #redirect_to user_surveys_path(current_user.id)
    #http://guides.rubyonrails.org/working_with_javascript_in_rails.html
    respond_to do |format|

      format.html { redirect_to user_surveys_path(current_user.id) }
      format.js {}
      format.json { render json: @survey, status: :created, location: @survey }

      # format.html { render action: 'new' }
      # format.json { render json: @survey.errors, status: :unprocessable_entity }

    end

  end

  def show
    @questions = Question.where(survey_id: @survey.id, choice_id: nil)    
  end

  def edit
    @questions = Question.where(survey_id: @survey.id, choice_id: nil)
  end

  def update

    @survey.update(survey_params)

    #http://guides.rubyonrails.org/working_with_javascript_in_rails.html
    respond_to do |format|

      format.html { redirect_to user_surveys_path(current_user.id) }
      format.js {}
      format.json { render json: @survey, status: :created, location: @survey }

      # format.html { render action: 'new' }
      # format.json { render json: @survey.errors, status: :unprocessable_entity }

    end

  end

  def destroy

    @survey.destroy
    redirect_to user_surveys_path(current_user.id)

  end

  def send_survey

    SurveyMailer.send_survey(@survey, "sender_email", params[:recipients].split(';')).deliver_now;
    redirect_to user_surveys_path(current_user.id)

  end

  private
    def survey_params
      params.require(:survey).permit(:title, :description, :color, :title_color, :is_active)
    end

    def find_survey
      @survey = current_user.surveys.find(params[:id])
    end

end
