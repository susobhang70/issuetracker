class ProjectsController < ApplicationController

	def index
		respond_with Project.all
	end

	def show
		respond_with Project.find(params[:id])
	end

	def create
		respond_with Project.create(project_params)
	end

	private
	def project_params
		params.require(:project).permit(:title, :description)
	end
end
