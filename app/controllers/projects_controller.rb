class ProjectsController < ApplicationController
	before_filter :authenticate_user!, only: [:create]
	def index
		respond_with Project.all
	end

	def show
		respond_with Project.find(params[:id])
	end

	def create
		respond_with Project.create(project_params.merge(user_id: current_user.id))
	end

	def edit
		project = Project.find(params[:id])
	end

	private
	def project_params
		params.require(:project).permit(:title, :description, :privateflag, :members)
	end

end
