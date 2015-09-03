angular.module('issuetracker')
.factory
(
	'users', 
	[
		'$http',
		function($http)
		{
			var o = { users: [] };

			o.getAll = function()
			{
				return $http.get('/users.json').success(function(data)
				{
					angular.copy(data, o.users);
				});
			};

			return o;
		}

	]
);