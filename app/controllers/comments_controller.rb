class CommentsController < ApplicationController
	before_filter :authenticate_user!, only: [:create]
	def create
		issue = Issue.find(params[:issue_id])
		project = Project.find(issue.project_id)
		comment = issue.comments.create(comment_params.merge(user_id: current_user.id))

		respond_with project, issue, comment
	end

	def show
	end

	private
	def comment_params
		params.require(:comment).permit(:body)
	end
end
