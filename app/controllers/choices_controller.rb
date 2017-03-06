class ChoicesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
  end

  def new

  end

  def create
    @choice = Choice.create!(choice_params)
    render json: params
    return
    #choices = choices.where(question_id: @choice.question_id)
    #sequence = choices.index{|h| h[:id] == @choice.id}
    #sequence = sequence + 1
    #redirect_to edit_user_survey_path(current_user.id, params[:survey_id])
    #render json: @question
    #render partial: 'sidebar/choice', locals: {choice: @choice, i: sequence}
  end

  def show
  end

  def edit
  end

  def update

    # @choice = Question.find(params[:id])
    # @choice.update(choice_params)

    # respond_to do |format|
    #   format.xml { render xml: @question.to_xml }
    #   format.json { render json: @choice.to_json }
    #   format.html { render partial: 'sidebar/choice', locals: { choice: @choice, i: -1 } }
    # end

  end

  def destroy
  end

  private
    def choice_params
      params.require(:choice).permit(:answer_id, :question_id, :value)
    end

end
