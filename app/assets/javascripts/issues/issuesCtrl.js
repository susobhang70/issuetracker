angular.module('issuetracker')
.controller
(
	'IssuesCtrl',
	[
		'$scope',
		'projects',
		'project',
		'Auth',
		function($scope, projects, project, Auth)
		{
			$scope.project = project;
			$scope.signedIn = Auth.isAuthenticated;
			$scope.searchInput = '';
			$scope.orders = 
			[
				{
					id: 1,
					title: 'Sort by ID',
					key: 'id',
					reverse: false,
					timescount: 0
				},
				{
					id: 2,
					title: 'Sort by Name',
					key: 'name',
					reverse: false,
					timescount: 0
				},
				{
					id: 3,
					title: 'Sort by Upvotes',
					key: 'upvotes',
					reverse: true,
					timescount: 0
				},
				{
					id: 4,
					title: 'Sort by Date',
					key: 'updated_at',
					reverse: false,
					timescount: 0
				}
			];
			$scope.orderchoice = $scope.orders[0];

			$scope.sortorder = function(id)
			{
				$scope.orderchoice = $scope.orders[id];
				$scope.orderchoice.timescount += 1;
				if($scope.orderchoice.timescount % 2 === 1)
					$scope.orderchoice.reverse = true;
				else
					$scope.orderchoice.reverse = false;
			}

			$scope.addIssue = function()
			{
				if($scope.name === '' || $scope.description === '')
				{	
					return;
				}
				projects.addIssue(project.id, { name: $scope.name, description: $scope.description, tags: $scope.tags, milestone: $scope.milestone }).success(function(issue)
				{
					$scope.project.issues.push(issue);
				})
				$scope.name = '';
				$scope.description = '';
				$scope.tags = '';
				$scope.milestone = '';
			}
			$scope.incrementUpvotes = function(issue)
			{
				projects.upvoteIssue(project, issue);
			}
		}
	]
);