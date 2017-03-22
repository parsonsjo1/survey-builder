class QuestionsController < ApplicationController
  
  def index
    @questions = Question.all
    render json: sequence
  end

  def new

    @question = Question.new

  end

  def create

    @question = Question.create(question_params)
    #@question = Question.new(survey_id: 21, title: "New Question", is_required: false, question_type: "")

    respond_to do |format|

        # questions = Question.where(survey_id: params[@question.survey_id])

        #Don't think I need this sequence number anymore because of javascript change
        #question_index = questions.index{|h| h[:id] == @question.id}
        #sequence = question_index + 1

        #http://guides.rubyonrails.org/working_with_javascript_in_rails.html
        #format.html { render partial: 'questions/question_box', locals: {question: @question, sequence: sequence} }
        format.js {}
        #format.json { render json: @question, status: :created, location: @question }
        #format.html { render action: 'new' }
        #format.json { render json: @question.errors, status: :unprocessable_entity }
    end

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
      #format.json {sidebar: render_to_string partial: 'sidebar/dropdown', question_box: render_to_string partial: 'questions/dropdown'} 
      format.json { render json: @question }
      format.html { render partial: 'sidebar/' + @question.question_type.gsub(' ', '_').downcase, locals: { question: @question } }
    end

  end

  def destroy

    @question = Question.find(params[:id])
    @question.destroy
    #redirect_to edit_user_survey_path(current_user.id, params[:survey_id])
    
    # http://guides.rubyonrails.org/working_with_javascript_in_rails.html
    respond_to do |format|
        #format.html {}
        format.js {}
        #format.json {}
        #format.html { }
        #format.json { render json: @question.errors, status: :unprocessable_entity }
    end
  end

  private
    def question_params
      params.require(:question).permit(:survey_id, :title, :is_required, :question_type)
    end

end
