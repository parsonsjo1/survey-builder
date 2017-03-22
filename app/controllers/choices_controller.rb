class ChoicesController < ApplicationController
  
  def index
  end

  def new

  end

  def create
    @choice = Choice.create(choice_params)

    respond_to do |format|
      #http://guides.rubyonrails.org/working_with_javascript_in_rails.html
      #format.html { }
      #format.js {render js: "alert('Hello Rails ');" and return}
      format.js {}
      #format.json { render json: @choice, status: :created, location: @choice }
      #format.html { render action: 'new' }
      #format.json { render json: @choice.errors, status: :unprocessable_entity }
    end
  end

  def show
  end

  def edit
  end

  def update

    @choice = Choice.find(params[:id])
    @choice.update(choice_params)

    respond_to do |format|
      #format.xml { render xml: @question.to_xml }
      format.json { render json: @choice.to_json }
      #format.html { render partial: 'sidebar/choice', locals: { choice: @choice, i: -1 } }
    end

  end

  def destroy
    @choice = Choice.find(params[:id])
    @choice.destroy

    respond_to do |format|
      format.js {}
    end

  end

  private
    def choice_params
      params.require(:choice).permit(:answer_id, :question_id, :value)
    end

end
