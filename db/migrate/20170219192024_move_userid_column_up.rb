class MoveUseridColumnUp < ActiveRecord::Migration[5.0]
	def up
	  change_column :responses, :user_id, :integer, after: :surveyy_id
	end
end
