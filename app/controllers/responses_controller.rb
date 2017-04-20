class ResponsesController < ApplicationController
  layout 'response_layout'
  skip_before_action :authenticate_user

  def index
  end

  def new
    @survey = Survey.where(token: params[:token]).take
    @questions = Question.where(survey_id: @survey.id, choice_id: nil)
  end

  def create
    @survey = Survey.find(params[:survey_id])
    
    # Create response
    @response = Response.create(survey_id: params[:survey_id], user_id: nil)

    # Create answers from dropdown
    if params[:dropdown] != nil
      params[:dropdown].each do |choice_id|
        Answer.create(response_id: @response.id, choice_id: choice_id, value: nil)
      end
    end

    # Create answers for checkboxes
    if params[:answer] != nil
      params[:answer].each do |choice_id| 
        Answer.create(response_id: @response.id, choice_id: choice_id, value: nil)
      end
    end

    # Create answers from free-response
    if params["free-response"] != nil
      params["free-response"].each do |choice_id|
        Answer.create(response_id: @response.id, choice_id: choice_id, value: params["free-response"][choice_id])
      end
    end

    # Send survey receipt to email
    send_receipt(@survey, @response, params[:email].split(';'))

    # Redirect user to thank you page
    render 'receipt', locals: {survey: @survey}
  end

  def show

  end

  def edit

  end

  def update
  end

  def destroy
  end

  def send_receipt(survey, response, recipient)

    SurveyMailer.send_receipt(survey, response, recipient).deliver_later

  end
end
