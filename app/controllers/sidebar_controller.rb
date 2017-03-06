class SidebarController < ApplicationController

  def update

    @question = Question.find(params[:id])
    @question.update(question_params)

    respond_to do |format|
      format.xml { render xml: @question.to_xml }
      #format.json {sidebar: render_to_string partial: 'sidebar/dropdown', question_box: render_to_string partial: 'questions/dropdown'} 
      format.html { render partial: 'sidebar/sidebar_question_content' }
    end

  end

  private
    def question_params
      params.require(:question).permit(:survey_id, :title, :is_required, :question_type)
    end

end
