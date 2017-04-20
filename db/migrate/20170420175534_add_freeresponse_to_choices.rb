class AddFreeresponseToChoices < ActiveRecord::Migration[5.0]
  def change
    add_column :choices, :is_free_response, :boolean, after: :value
  end
end
