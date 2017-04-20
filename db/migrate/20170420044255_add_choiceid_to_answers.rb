class AddChoiceidToAnswers < ActiveRecord::Migration[5.0]
  def change
    add_reference :answers, :choice, foreign_key: true, null: false, index: true, after: :response_id
  end
end
