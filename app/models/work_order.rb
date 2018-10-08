class WorkOrder < ApplicationRecord
  validates :coffee, :method, :cases, :packets, :ship_date, presence: true
end
