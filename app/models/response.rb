class Response < ApplicationRecord
  belongs_to :survey
  belongs_to :user, optional: true
  has_many :answers, dependent: :destroy

  accepts_nested_attributes_for :answers

end
