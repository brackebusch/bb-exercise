class WorkOrder < ApplicationRecord
  validates :coffee, :method, :cases, :packets, :ship_date, presence: true
  validates_inclusion_of :coffee, in: ['Bella Donovan', 'Giant Steps']
  validates_inclusion_of :method, in: ['Aeropress', 'Coffee Maker', 'Cold Brew', 'French Press', 'Pour Over']
  validates_inclusion_of :packets, in: [25, 50]
  validates_numericality_of :cases
  validate :ship_date_is_date
  validate :ship_date_cannot_be_in_the_past
  
  def ship_date_cannot_be_in_the_past
    if ship_date.present? && ship_date < Date.today
      errors.add(:ship_date, "can't be in the past")
    end
  end

  def ship_date_is_date
    if ship_date.present? && !ship_date.instance_of?(Date)
      errors.add(:ship_date, "must be a date")
    end
  end

end