class CreateSurveyys < ActiveRecord::Migration[5.0]
  def change
    create_table :surveyys do |t|
      t.references :user, foreign_key: true, null: false
      t.string :title, null: false
      t.string :token, null: false

      t.timestamps
    end
  end
end
