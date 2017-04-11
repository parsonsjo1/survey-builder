class AddChoiceidToQuestions < ActiveRecord::Migration[5.0]
  def change
    add_reference :questions, :choice, foreign_key: true, after: :survey_id
  end
end
