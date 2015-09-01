angular.module('issuetracker')
.controller
(
	'ProjectsCtrl', 
	[
		'$scope',
		'projects',
		'Auth',
		function($scope, projects, Auth)
		{
			$scope.projects = projects.projects;
			$scope.signedIn = Auth.isAuthenticated;
			$scope.searchInput = '';
			$scope.orders = 
			[
				{
					id: 1,
					title: 'Sort by Title',
					key: 'title',
					reverse: false,
					timescount: 0,
					icon: 'glyphicon glyphicon-sort',
					icon1: 'glyphicon glyphicon-sort-by-alphabet',
					icon2: 'glyphicon glyphicon-sort-by-alphabet-alt'
				},
				{
					id: 2,
					title: 'Sort by ID',
					key: 'id',
					reverse: false,
					timescount: 0,
					icon: 'glyphicon glyphicon-sort-by-order',
					icon1: 'glyphicon glyphicon-sort-by-order',
					icon2: 'glyphicon glyphicon-sort-by-order-alt'
				},
				{
					id: 3,
					title: 'Sort by IssueCount',
					key: 'issues.length',
					reverse: false,
					timescount: 0,
					icon: 'glyphicon glyphicon-sort',
					icon1: 'glyphicon glyphicon-sort-by-order',
					icon2: 'glyphicon glyphicon-sort-by-order-alt'
				}		
			];
			$scope.orderchoice = $scope.orders[1];

			$scope.sortorder = function(id)
			{
				$scope.orderchoice = $scope.orders[id];
				$scope.orderchoice.timescount += 1;
				if($scope.orderchoice.timescount % 2 === 1)
				{	
					$scope.orderchoice.reverse = true;
					$scope.orderchoice.icon = $scope.orderchoice.icon2;
				}
				else
				{	
					$scope.orderchoice.reverse = false;
					$scope.orderchoice.icon = $scope.orderchoice.icon1;
				}
			}			
			$scope.addProject = function()
			{
				if(!$scope.title || $scope.title === '')
				{	
					return;
				}
				if(!$scope.description || $scope.description === '')
				{	
					return;
				}
				projects.create({title: $scope.title, description: $scope.description});
				$scope.title =  '';
				$scope.description = '';
			};
		}
	]
);
