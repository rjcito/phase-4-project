class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize, only: :create
  #you can use these in any controller, are we logged in?
  def logged_in?
    !!session[:user_id] # two bangs to get a boolean value !!1 = true 
  end


  #what's my current user? 
  def current_user
    current_user = User.find_by_id(session[:user_id]) if logged_in? 
  end

  private

  def authorize 
    user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
