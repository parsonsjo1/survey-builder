class AddValuecolumnToChoices < ActiveRecord::Migration[5.0]
  def self.up
    add_column :choices, :value, :string, after: :question_id
  end
  def self.down
    remove_column :choices, :value, :string
  end  
end
