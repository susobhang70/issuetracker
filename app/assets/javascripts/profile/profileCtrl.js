angular.module('issuetracker')
.controller
(
	'ProfileCtrl', 
	[
		'$scope',
		'users',
		'user',
		'Auth',
		'$http',
		function($scope, users, user, Auth, $http)
		{
			$scope.user = user;
			$scope.signedIn = Auth.isAuthenticated;
			$scope.searchInput = '';
			$scope.updatePassword = function()
			{
				if($scope.user.newpassword === $scope.user.passwordconf)
				{
					$http({
			            method: 'PUT', 
			            url: '/users.json',
			            data: 
			            {
			            	user: 
			            	{
			            		email: $scope.user.email,
                                password: $scope.user.newpassword,
                                password_confirmation: $scope.user.passwordconf,
                                current_password: $scope.user.password
                            }
                        }
			        }).
			        success(function(data, status, headers, config) 
			        {
			        	$scope.user.password='';
			            $scope.user.newpassword='';
			            $scope.user.passwordconf='';
			            alert("Password updated successfully!");
			        });
				}
				else
			    {
			    	alert("Passwords don't match!");
			    }
			}
		}
	]
);
