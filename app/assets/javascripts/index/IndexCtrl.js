angular.module('issuetracker')
.controller
(
	'IndexCtrl', 
	[
		'$scope',
		function($scope)
		{
			$scope.welcome = "Issue Tracker 1.0";
			$scope.message = "This is the home page for the web-based issue tracked built on RoR and AJS";
		}
	]
);
