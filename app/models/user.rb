class User < ApplicationRecord
	has_many :surveys, dependent: :destroy
	has_many :responses

end
