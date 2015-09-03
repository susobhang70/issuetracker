angular.module('issuetracker')
.controller
(
	'UsersCtrl', 
	[
		'$scope',
		'users',
		'Auth',
		function($scope, users, Auth)
		{
			console.log("reached here");
			$scope.users = users.users;
			$scope.signedIn = Auth.isAuthenticated;
			$scope.searchInput = '';
		}
	]
);
