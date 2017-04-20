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
    choice_id = params[:question][:choice_id] == "none" ? nil : params[:question][:choice_id]
    @question = Question.create(question_params.merge(choice_id: choice_id, sequence: sequence))
    @survey = Survey.find(@question.survey_id)
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
        format.json { render json: @question.to_json }
        format.js {}
    end
  end

  def edit
  end

  def update

    @question = Question.find(params[:id])
    @question.update(question_params)
    @questions = Question.where(survey_id: @question.survey_id)

    # create a choice for free response question if one has not yet been created
    if @question.type == "Free Response"
      @choice = Choice.where(question_id: @question.id, is_free_response: true).take
      @choice = Choice.create(question_id: @question.id, value: nil, is_free_response: true) if @choice == nil
    end

    respond_to do |format|
      format.js {}
      format.json { render json: @question.to_json}
    end

  end

  def destroy

    @question = Question.find(params[:id])
    @question.destroy
    
    # http://guides.rubyonrails.org/working_with_javascript_in_rails.html
    respond_to do |format|
        format.js {}
    end

    #redirect_to edit_user_survey_path(current_user.id, params[:survey_id])
  end

  private
    def question_params
      params.require(:question).permit(:survey_id, :choice_id, :title, :placeholder, :is_required, :allow_multiple_answers, :question_type)
    end

end
