class QuestionsController < ApplicationController
  def index
  end

  def new

    @question = Question.new

  end

  def create

    @question = Question.create!(question_params)
    #redirect_to edit_user_survey_path(current_user.id, params[:survey_id])
    #render json: @question
    render partial: 'questions/question_box', locals: {id: @question.id, title: @question.title}

  end

  def show
  end

  def edit
  end

  def update

    @question = Question.find(params[:id])
    @question.update(question_params)
    render json: @question

  end

  def destroy

    @question = Question.find(params[:id])
    @question.destroy
    redirect_to edit_user_survey_path(current_user.id, params[:survey_id])
    
  end

  private
    def question_params
      params.require(:question).permit(:survey_id, :title, :is_required, :type)
    end

end
