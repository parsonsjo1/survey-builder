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
    render partial: 'questions/question_box', locals: {question: @question, sequence: sequence}

  end

  def show
    #survey_question GET    /surveys/:survey_id/questions/:id(.:format)        questions#show

    @question = Question.find(params[:id])

    render partial: 'sidebar/sidebar_question_content', locals: { question: @question }

  end

  def edit
  end

  def update

    @question = Question.find(params[:id])
    @question.update(question_params)

    respond_to do |format|
      format.xml { render xml: @question.to_xml }
      #format.json {sidebar: render_to_string partial: 'sidebar/dropdown', question_box: render_to_string partial: 'questions/dropdown'} 
      format.html { render partial: 'sidebar/dropdown', locals: { question: @question } }
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
