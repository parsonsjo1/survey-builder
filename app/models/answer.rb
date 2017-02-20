class Answer < ApplicationRecord
  belongs_to :response
  has_one :choice, dependent: :destroy
end
