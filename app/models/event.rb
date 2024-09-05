class Event < ApplicationRecord
  validates :name, :description, :date, :location, :quantity, :ticket_price, presence: true
  validates :quantity, numericality: { only_integer: true, greater_than: 0 }
  validates :ticket_price, numericality: { greater_than: 0 }
  validate :date_cannot_be_in_the_past

  belongs_to :user
  has_many :orders
  has_one_attached :photo

  geocoded_by :location
  after_validation :geocode, if: :will_save_change_to_location?

  private

  def date_cannot_be_in_the_past
    if date.present? && date < Date.today
      errors.add(:date, "no puede ser en el pasado")
    end
  end
end
