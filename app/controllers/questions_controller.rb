class QuestionsController < ApplicationController
  
  def index
    @questions = Question.all

  end

  def new

    @question = Question.new

  end

  def create
    questions = Question.where(survey_id: params[:question][:survey_id])
    sequence = questions.length + 1
    @question = Question.create(question_params.merge(sequence: sequence))
    #@question = Question.new(survey_id: 21, title: "New Question", is_required: false, question_type: "")

    respond_to do |format|

        #http://guides.rubyonrails.org/working_with_javascript_in_rails.html
        format.js {}
    end

  end

  def show
    #survey_question GET    /surveys/:survey_id/questions/:id(.:format)        questions#show

    @question = Question.find(params[:id])
    @questions = Question.where(survey_id: @question.survey_id)
    respond_to do |format|
        #http://guides.rubyonrails.org/working_with_javascript_in_rails.html
        format.js {}
    end
  end

  def edit
  end

  def update

    @question = Question.find(params[:id])
    @question.update(question_params)
    @questions = Question.where(survey_id: @question.survey_id)

    respond_to do |format|
      format.js {}
      format.json { render json: @question.to_json}
    end

  end

  def destroy

    @question = Question.find(params[:id])
    @question.destroy
    #redirect_to edit_user_survey_path(current_user.id, params[:survey_id])
    
    # http://guides.rubyonrails.org/working_with_javascript_in_rails.html
    respond_to do |format|
        format.js {}
    end
  end

  private
    def question_params
      params.require(:question).permit(:survey_id, :title, :is_required, :allow_multiple_answers, :question_type)
    end

end
