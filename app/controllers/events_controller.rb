class EventsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  def index
    @categories = Event::CATEGORIES
    @events = Event.all.select { |event| event.user_id != current_user.id }
  end

  def show
    @marker = { lng: @event.longitude, lat: @event.latitude }
  end

  def new
    @categories = Event::CATEGORIES
    @event = Event.new
  end

  def create
    @order = Order.new(order_params)
    @order.user = current_user
    @order.event = @event
    if @order.save!
      @event = @order.event
      @event.quantity -= @order.quantity
      @event.save!
      flash[:notice] = 'Successfully apllied!'
      redirect_to order_path(@order)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @event.update(event_params)
    redirect_to event_path(@event)
  end

  def destroy
    @event.destroy
    redirect_to my_events_path, status: :see_other
  end

  def my_events
    @my_events = Event.all.select { |event| event.user_id == current_user.id }
  end

  def sells
    @sell_events = Order.all.select { |order| order.event.user_id == current_user.id }
    # id_buyers = Order.where(status: "solicitado").map(&:user_id)
    # @orders = User.where(id: id_buyers)
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :date, :location, :quantity, :ticket_price, :photo, :category)
  end

  def set_event
    @event = Event.find(params[:id])
  end
end
