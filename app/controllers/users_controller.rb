class UsersController < ApplicationController
	def index
		respond_with User.all
	end

	def show
  		user = User.find(params[:id])
  		respond_with user
	end

	def projects
		user = User.find(params[:id])
		project = Project.where(:user_id => user.id)
		respond_with project
	end
end
