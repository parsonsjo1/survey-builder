class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.references :response, foreign_key: true, null:false

      t.timestamps
    end
  end
end
