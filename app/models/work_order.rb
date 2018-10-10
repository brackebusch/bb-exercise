class WorkOrder < ApplicationRecord
  validates :cases, presence: true
  validates :coffee, inclusion:{ in: ['Bella Donovan', 'Giant Steps'] }
  validates :method, inclusion: { in: ['Aeropress', 'Coffee Maker', 'Cold Brew', 'French Press', 'Pour Over'] }
  validates :packets, inclusion: { in: [25, 50] }  
  validate :cases_is_number
  validate :ship_date_is_date
  validate :ship_date_cannot_be_in_the_past
  
  def ship_date_cannot_be_in_the_past
    ship_date < Date.today
  end

  def ship_date_is_date
      ship_date.instance_of?(Date)
  end

  def cases_is_number
    cases.is_a? Numeric
  end

end
