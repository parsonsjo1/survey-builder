class RenameTypeInQuestions < ActiveRecord::Migration[5.0]
  def self.up
    rename_column :questions, :type, :question_type
  end

  def self.down
    rename_column :questions, :question_type, :type
  end
end
