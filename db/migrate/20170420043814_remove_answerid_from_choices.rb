class RemoveAnsweridFromChoices < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :choices, column: :answer_id
    remove_column :choices, :answer_id
  end
end
