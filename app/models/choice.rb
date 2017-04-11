class Choice < ApplicationRecord
  belongs_to :answer, optional: true
  has_many :questions, dependent: :destroy
  belongs_to :question
end
