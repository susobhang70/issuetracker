class IssuesController < ApplicationController
	before_filter :authenticate_user!, only: [:create, :upvote]
	def index
		project = Project.find(params[:project_id])
		respond_with project, project.issues
	end

	def show
		project = Project.find(params[:project_id])
		issue = project.issues.find(params[:id])

		respond_with project, issue
	end

	def create
		project = Project.find(params[:project_id])
		issue = project.issues.create(issue_params.merge(user_id: current_user.id))
		
		respond_with project, issue
	end

	def upvote
		project = Project.find(params[:project_id])
		issue = project.issues.find(params[:id])
		issue.increment!(:upvotes)

		respond_with project, issue
	end
	


	private
	def issue_params
		params.require(:issue).permit(:name, :description, :tags, :milestone)
	end


end
