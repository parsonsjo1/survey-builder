class RemoveOwnerFromSurveyy < ActiveRecord::Migration[5.0]
  def change
    remove_reference :surveyys, :owner, foreign_key: true
  end
end
