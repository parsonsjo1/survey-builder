class CreateLogics < ActiveRecord::Migration[5.0]
  def self.up
    create_table :logics do |t|
      t.references :question, foreign_key: true
      t.integer :if_choice_id
      t.integer :show_question_id

      t.timestamps
    end
  end

  def self.down
    destroy_table :logics
  end
end
