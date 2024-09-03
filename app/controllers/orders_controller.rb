class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update]
  def index
    @orders = Order.all
  end

  def show
  end

  def new
    @order = Order.new
  end

  def create
    @order = Order.new(order_params)
    @order.save
    redirect_to orders_path
  end

  def update
    @order.update(order_params)
    redirect_to orders_path
  end

  private

  def order_params
    params.require(:order).permit(:quantity, :total_price, :shipping_address, :status)
  end

  def set_order
    @order = Order.find(params[:id])
  end
end
