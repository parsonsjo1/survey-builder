

class Survey < ApplicationRecord
  belongs_to :user
  
  has_many :responses, dependent: :destroy
  has_many :questions, dependent: :destroy

	accepts_nested_attributes_for :questions


end
