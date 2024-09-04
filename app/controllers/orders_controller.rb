class OrdersController < ApplicationController
  before_action :set_order, only: %i[show update]
  before_action :set_event, only: %i[create new]
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
    @order.user = current_user
    @order.event = @event
    if @order.save!
      flash[:notice] = 'Successfully apllied!'
      redirect_to order_path(@order)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    @order.update(order_params)
    redirect_to orders_index_path
  end

  private

  def order_params
    params.require(:order).permit(:quantity, :total_price, :shipping_address, :status)
  end

  def set_event
    @event = Event.find(params[:event_id])
  end

  def set_order
    @order = Order.find(params[:id])
  end
end
