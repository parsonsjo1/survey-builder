class Question < ApplicationRecord
  belongs_to :survey
  has_many :choices, dependent: :destroy
  belongs_to :choice, optional: true
end
