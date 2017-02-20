class RemoveSurveyyFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_reference :users, :surveyy, foreign_key: true
  end
end
