class Question < ApplicationRecord
  belongs_to :survey
  has_many :choices, dependent: :destroy
  has_many :child_questions, through: :choices, source: "questions"
  belongs_to :choice, optional: true
end
