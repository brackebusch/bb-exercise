require 'rails_helper'

RSpec.describe WorkOrder, type: :model do
  
describe 'validations' do
  it { should validate_presence_of(:coffee) }
  it { should validate_presence_of(:method) }
  it { should validate_presence_of(:packets) }
  it { should validate_presence_of(:cases) }
  it { should validate_presence_of(:ship_date) }
  it { should validate_numericality_of(:cases) }
  it { should validate_inclusion_of(:coffee).in_array(['Bella Donovan', 'Giant Steps'])}
  it { should validate_inclusion_of(:method).in_array(['Aeropress', 'Coffee Maker', 'Cold Brew', 'French Press', 'Pour Over'])}
  it { should validate_inclusion_of(:packets).in_array([25, 50])}
end
end
