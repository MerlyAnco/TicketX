class EventsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
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
    @event.save
    redirect_to events_path
  end

  def edit
  end

  def update
    @event.update(event_params)
    redirect_to events_path
  end

  def destroy
    @event.destroy
    redirect_to events_path, status: :see_other
  end

  def my_events
    @my_events = current_user.events
  end

  def sells
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :date, :location, :quantity, :ticket_price, :photo)
  end

  def set_event
    @event = Event.find(params[:id])
  end
end
