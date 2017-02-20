class AddColorToSurveys < ActiveRecord::Migration[5.0]
  def change
    add_column :surveys, :color, :string, after: :title
  end
end
