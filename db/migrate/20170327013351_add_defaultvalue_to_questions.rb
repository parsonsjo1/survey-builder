class AddDefaultvalueToQuestions < ActiveRecord::Migration[5.0]
  def self.up
    change_column :questions, :allow_multiple_answers, :boolean, default: false
  end
  def self.down
    change_column :questions, :allow_multiple_answers, :boolean, default: nil
  end
end
