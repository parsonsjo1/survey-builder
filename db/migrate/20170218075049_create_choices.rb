class CreateChoices < ActiveRecord::Migration[5.0]
  def change
    create_table :choices do |t|
      t.references :answer, foreign_key: true, null: false
      t.references :question, foreign_key: true, null: false

      t.timestamps
    end
  end
end
