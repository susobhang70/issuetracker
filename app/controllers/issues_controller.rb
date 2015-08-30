class IssuesController < ApplicationController

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
		issue = project.issues.create(issue_params)
		
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
		params.require(:issue).permit(:name, :description)
	end
end
