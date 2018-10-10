require "rails_helper"

RSpec.describe WorkOrdersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/work_orders").to route_to("work_orders#index")
    end 
    
    it "routes to #create" do
      expect(:post => "/work_orders").to route_to("work_orders#create")
    end
  end
end
