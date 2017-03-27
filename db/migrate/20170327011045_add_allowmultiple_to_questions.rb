class AddAllowmultipleToQuestions < ActiveRecord::Migration[5.0]
  def self.up
    add_column :questions, :allow_multiple_answers, :boolean, after: :is_required
  end
  def self.down
    remove_column :questions, :allow_multiple_answers
  end
end
