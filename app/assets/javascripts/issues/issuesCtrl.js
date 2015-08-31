angular.module('issuetracker')
.controller
(
	'IssuesCtrl',
	[
		'$scope',
		'projects',
		'project',
		function($scope, projects, project)
		{
			$scope.project = project;
			$scope.addIssue = function()
			{
				if($scope.name === '' || $scope.description === '')
				{	
					return;
				}
				projects.addIssue(project.id, { name: $scope.name, description: $scope.description }).success(function(comment)
				{
					$scope.project.issues.push(issue);
				})
				$scope.name = '';
				$scope.description = '';
			}
			$scope.incrementUpvotes = function(issue)
			{
				projects.upvoteIssue(project, issue);
			}
		}
	]
);