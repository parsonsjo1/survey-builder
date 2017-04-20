class Choice < ApplicationRecord
  has_many :questions, dependent: :destroy
  belongs_to :question
  has_many :answers
end
