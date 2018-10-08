# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# “Create Order” modal has the following fields
names = ['Bella Donovan', 'Giant Steps']
methods = ['Aeropress', 'Coffee Maker', 'Cold Brew', 'French Press', 'Pour Over']
packets = [25, 50]
priority = [true, false, false, false, false]
notes = ['delicious style', 'bold flavor please!', 'best order ever', 'Blue Bottle is my favorite']

seed = Random.new
min_date = Date.today + 1
max_date = Date.today >> 1

200.times do |i|
  WorkOrder.create(coffee: names[seed.rand(0..1)], 
                  method: methods[seed.rand(0..4)], 
                  cases: seed.rand(1..100),
                  packets: packets[seed.rand(0..1)],
                  priority: priority[seed.rand(0..4)],
                  ship_date: rand(min_date..max_date),
                  notes: notes[seed.rand(0..17)],
                  )
end