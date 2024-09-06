class EventsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  def index
    @categories = Event::CATEGORIES
    if current_user
    @events = Event.all.select { |event| event.user_id != current_user.id }
    else
      @events = Event.all
    end
  end

  def show
    @marker = { lng: @event.longitude, lat: @event.latitude }
  end

  def new
    @categories = Event::CATEGORIES
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.user = current_user
    if @event.save
      redirect_to my_events_path, notice: 'Evento creado exitosamente.'
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render json: { errors: @event.errors.full_messages }, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @categories = Event::CATEGORIES
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
