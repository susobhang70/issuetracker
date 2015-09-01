angular.module('issuetracker')
.controller
(
	'CommentsCtrl',
	[
		'$scope',
		'issues',
		'issue',
		'Auth',
		function($scope, issues, issue, Auth)
		{
			$scope.issue = issue;
			$scope.signedIn = Auth.isAuthenticated;
			$scope.searchInput = '';
			$scope.addComment = function()
			{
				if($scope.body === '')
				{	
					return;
				}
				issues.addComment(issue.project_id, issue.id, { body: $scope.body }).success(function(comment)
				{
					$scope.issue.comments.push(comment);
				})
				$scope.body = '';
			}
		}
	]
);