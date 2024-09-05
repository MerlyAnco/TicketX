class EventsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  def index
    @events = Event.all
  end

  def show
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.user = current_user
    if @event.save
      redirect_to events_path, notice: 'Evento creado exitosamente.'
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render json: { errors: @event.errors.full_messages }, status: :unprocessable_entity }
      end
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
    redirect_to events_path, status: :see_other
  end

  def my_events
    @my_events = Order.all.map(&:event).select { |event| event.user_id == current_user.id }
  end

  def sells
    # @events = Order.where(status: "vendido").map(&:event).select { |event| event.user_id == current_user.id }
    id_buyers = Order.where(status: "vendido").map(&:user_id)
    @events = User.where(id: id_buyers)
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :date, :location, :quantity, :ticket_price, :photo)
  end

  def set_event
    @event = Event.find(params[:id])
  end
end
