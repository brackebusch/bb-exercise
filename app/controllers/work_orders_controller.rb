class WorkOrdersController < ApplicationController
  before_action :set_work_order, only: [:show, :update, :destroy]
  # GET /work_orders
  def index
    @work_orders = WorkOrder.all.order(:ship_date)

    render json: @work_orders
  end

  # GET /work_orders/1
  def show
    render json: @work_order
  end

  # POST /work_orders
  def create
    @work_order = WorkOrder.new(work_order_params)

    if @work_order.save
      render json: @work_order, status: :created, location: @work_order
    else
      render json: @work_order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /work_orders/1
  def update
    if @work_order.update(work_order_params)
      render json: @work_order
    else
      render json: @work_order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /work_orders/1
  def destroy
    @work_order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_work_order
      @work_order = WorkOrder.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def work_order_params
      params.require(:work_order).permit(:coffee, :method, :ship_date, :cases, :packets, :notes, :priority, :completed)
    end
end
