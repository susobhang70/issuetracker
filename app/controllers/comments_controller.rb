class CommentsController < ApplicationController

	def create
		issue = Issue.find(params[:issue_id])
		project = Project.find(issue.project_id)
		comment = issue.comments.create(comment_params)

		respond_with issue, comment
	end

	def show
	end

	private
	def comment_params
		params.require(:comment).permit(:body)
	end
end
