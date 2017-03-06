class ChangeAnsweridcolumnInChoices < ActiveRecord::Migration[5.0]
  def self.up
  	change_column_null :choices, :answer_id, true
  end
  def self.down
  	change_column_null :choices, :answer_id, false
  end
end
