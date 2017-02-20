class AddActiveToSurveys < ActiveRecord::Migration[5.0]
  def change
    add_column :surveys, :is_active, :boolean, null: false, after: :token
  end
end
