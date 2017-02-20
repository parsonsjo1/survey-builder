class RenameSurveyy < ActiveRecord::Migration[5.0]
  def self.up
    rename_table :surveyys, :surveys
  end

  def self.down
    rename_table :surveys, :surveyys
  end
end
