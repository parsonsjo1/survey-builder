

class Survey < ApplicationRecord
  belongs_to :user
  
  has_many :responses, dependent: :destroy
  has_many :questions, dependent: :destroy

end
