class CreateWorkOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :work_orders do |t|
      t.string :coffee, null: false
      t.string :method, null: false
      t.integer :cases, null: false
      t.integer :packets, null: false
      t.date :ship_date, null: false
      t.text :notes
      t.boolean :priority, null: false, default: false
      t.boolean :completed, null: false, default: false
      
      t.timestamps
    end
  end
end
