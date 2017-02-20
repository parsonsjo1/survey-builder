class RenameSurveyColumn < ActiveRecord::Migration[5.0]
  def self.up
    rename_column :responses, :surveyy_id, :survey_id
    rename_column :questions, :surveyy_id, :survey_id
  end

  def self.down
    rename_column :responses, :survey_id, :surveyy_id
    rename_column :questions, :survey_id, :surveyy_id
  end
end
