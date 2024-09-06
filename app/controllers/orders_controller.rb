class OrdersController < ApplicationController
  before_action :set_order, only: %i[show update destroy]
  before_action :set_event, only: %i[create new]
  def index
    @orders = Order.where(user_id: current_user)
  end

  def show
  end

  def new
    @order = Order.new
    @quantity = params[:quantity]
    @total_price = params[:total_price]
    @marker = { lat: @event.latitude, lng: @event.longitude }
  end

  def create
    @order = Order.new(order_params)
    @order.user = current_user
    @order.event = @event
    if @order.save!
      flash[:notice] = ''
      redirect_to order_path(@order)
      @event.update(quantity: @event.quantity - @order.quantity)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    @order.update(order_params)
    redirect_to orders_index_path
  end

  def destroy
    if @order
      flash[:notice] = ''
      @order.event.update(quantity: @order.event.quantity + @order.quantity)
      @order.destroy
      redirect_to orders_path, status: :see_other
    else
      render :index, status: :unprocessable_entity
    end
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
