class Event < ApplicationRecord
  CATEGORIES = ['Concierto', 'Viajes', 'Teatro', 'Festival', 'Cine', 'Fiesta', 'Conferencias', 'Cursos', 'Talleres', 'Otro']

  validates :name, :description, :date, :location, :quantity, :ticket_price, presence: true
  validates :quantity, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :ticket_price, numericality: { greater_than: 0 }
  validate :date_cannot_be_in_the_past
  validates :category, inclusion: { in: CATEGORIES, message: "%{value} no es una categoría válida" }


  belongs_to :user
  has_many :orders, dependent: :destroy
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
