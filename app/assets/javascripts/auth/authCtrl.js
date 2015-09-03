angular.module('issuetracker')
.controller
(
	'AuthCtrl', 
	[
		'$scope',
		'$state',
		'Auth',
		function($scope, $state, Auth)
		{
		  	$scope.login = function() 
		  	{
		    	Auth.login($scope.user).then(function()
		    	{
		      		$state.go('projectindex');
		    	},
		    	function(error)
		    	{
		    		alert('Wrong credentials!');
		    	});
		  	};

		  	$scope.register = function() 
		  	{
		  		if($scope.user.password === $scope.passconf)
		  		{
			    	Auth.register($scope.user).then(function()
			    	{
			      		$state.go('projectindex');
			    	});
			    }
			    else
			    {
			    	alert("Passwords don't match!");
			    }
		  	};			
		}
	]
);