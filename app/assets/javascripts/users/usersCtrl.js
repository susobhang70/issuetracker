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
			$scope.orders = 
			[
				{
					id: 1,
					title: 'Sort by User',
					key: 'username',
					reverse: false,
					timescount: 0,
					icon: 'glyphicon glyphicon-sort',
					icon1: 'glyphicon glyphicon-sort-by-alphabet',
					icon2: 'glyphicon glyphicon-sort-by-alphabet-alt'
				}		
			];
			
			$scope.orderchoice = $scope.orders[0];

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
			};
		}
	]
);
