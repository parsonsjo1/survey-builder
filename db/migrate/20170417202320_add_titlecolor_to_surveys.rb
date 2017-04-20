class AddTitlecolorToSurveys < ActiveRecord::Migration[5.0]
  def change
    add_column :surveys, :title_color, :string, after: :title
  end
end
