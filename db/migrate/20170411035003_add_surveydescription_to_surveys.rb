class AddSurveydescriptionToSurveys < ActiveRecord::Migration[5.0]
  def change
    add_column :surveys, :description, :string, after: :title
  end
end
