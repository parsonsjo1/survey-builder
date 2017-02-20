class Response < ApplicationRecord
  belongs_to :survey
  belongs_to :user
  has_many :answers, dependent: :destroy

end
