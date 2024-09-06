class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    if current_user
      @events = Event.where.not(user_id: current_user.id).limit(4)
    else
      @events = Event.all.take(4)
    end
  end
end
