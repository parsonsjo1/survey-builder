class QuestionsController < ApplicationController
  def index
    @questions = Question.all

    render json: sequence
  end

  def new

    @question = Question.new

  end

  def create

    @question = Question.create!(question_params)
    questions = Question.all
    sequence = questions.index{|h| h[:id] == @question.id}
    sequence = sequence + 1
    #redirect_to edit_user_survey_path(current_user.id, params[:survey_id])
    #render json: @question
    render partial: 'questions/question_box', locals: {id: @question.id, sequence: sequence, title: @question.title}

  end

  def show
    #survey_question GET    /surveys/:survey_id/questions/:id(.:format)        questions#show

    @question = Question.find(params[:id])

    if(@question.question_type == "Multiple Choice")
      render partial: 'questions/multiple_choice', collection: @question
    elsif(@question.question_type == "Free Response")
      render partial: 'questions/free_response', collection: @question
    else
      #render partial: 'questions/multiple_choice', collection: @question
    end

  end

  def edit
  end

  def update

    @question = Question.find(params[:id])
    @question.update(question_params)
    render json: @question
    respond_to do |format|
      format.xml { render xml: @question.to_xml }
      format.json { render json: @question.to_json }
      format.html { render partial: 'questions/multiple_choice', collection: @question }
    end

  end

  def destroy

    @question = Question.find(params[:id])
    @question.destroy
    redirect_to edit_user_survey_path(current_user.id, params[:survey_id])
    
  end

  private
    def question_params
      params.require(:question).permit(:survey_id, :title, :is_required, :question_type)
    end

end
