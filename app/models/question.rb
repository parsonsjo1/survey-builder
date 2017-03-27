class Question < ApplicationRecord
  belongs_to :survey
  has_many :choices, dependent: :destroy
  has_many :logics, dependent: :destroy
end
