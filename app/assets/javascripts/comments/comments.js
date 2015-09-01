angular.module('issuetracker')
.factory
(
	'issues',
	[
		'$http',
		function($http)
		{
			var o = { issues : [] };
			o.getIssue = function(project_id, id)
			{
				console.log("function called");
				return $http.get('/projects/' + project_id + '/issues/' + id + '.json').then(function(res)
				{
					return res.data;
				});
			};

			o.addComment = function(pid, id, comment)
			{
				return $http.post('/projects/' + pid + '/issues/' + id + '/comments.json', comment);
			};

			return o;
		}
	]
);