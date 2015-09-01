angular.module('issuetracker')
.controller
(
	'IndexCtrl', 
	[
		'$scope',
		'Auth',
		function($scope, Auth)
		{
			$scope.signedIn = Auth.isAuthenticated;
			$scope.welcome = "Issue Tracker 1.0";
			$scope.message = "This is the home page for the web-based issue tracked built on RoR and AJS";
		}
	]
);
