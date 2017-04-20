class AddValueToAnswers < ActiveRecord::Migration[5.0]
  def change
    add_column :answers, :value, :string, after: :choice_id
  end
end
