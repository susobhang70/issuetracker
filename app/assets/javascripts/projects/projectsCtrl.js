angular.module('issuetracker')
.controller
(
	'ProjectsCtrl', 
	[
		'$scope',
		'projects',
		function($scope, projects)
		{
			$scope.projects = projects.projects;
			$scope.searchInput = '';
			$scope.orders = 
			[
				{
					id: 1,
					title: 'Sort by Title',
					key: 'title',
					reverse: false
				},
				{
					id: 2,
					title: 'Sort by ID',
					key: 'id',
					reverse: false
				}		
			];
			$scope.orderchoice = $scope.orders[1];
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
