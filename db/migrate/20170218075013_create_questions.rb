class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.references :surveyy, foreign_key: true, null: false
      t.string :title
      t.boolean :is_required
      t.string :type

      t.timestamps
    end
  end
end
