class AddPlaceholderToQuestions < ActiveRecord::Migration[5.0]
  def change
    add_column :questions, :placeholder, :string, after: :sequence
  end
end
