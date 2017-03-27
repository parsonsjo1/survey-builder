class AddSequenceToQuestions < ActiveRecord::Migration[5.0]
  def self.up
    add_column :questions, :sequence, :integer, after: :title
  end
  def self.down
    remove_column :questions, :sequence
  end
end
