class Order < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :quantity, presence: true
  validates :total_price, presence: true
  validates :status, presence: true
end
