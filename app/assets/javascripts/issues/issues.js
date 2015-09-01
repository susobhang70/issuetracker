angular.module('issuetracker')
.factory
(
	'projects', 
	[
		'$http',
		function($http)
		{
			var o = { projects: [] };

			o.getAll = function()
			{
				return $http.get('/projects.json').success(function(data)
				{
					angular.copy(data, o.projects);
				});
			};

			o.create = function(project)
			{
				return $http.post('/projects.json', project).success(function(data)
				{
					o.projects.push(data);
				});
			};

			o.getProject = function(id)
			{
				return $http.get('/projects/' + id +'.json').then(function(res)
				{
					return res.data;
				});
			};

			o.addIssue = function(id, issue)
			{
				return $http.post('/projects/' + id + '/issues.json', issue);
			};

			o.upvoteIssue = function(project, issue)
			{
				return $http.put('/projects/' + project.id + '/issues/' + issue.id + '/upvote.json').success(function(data)
				{
					issue.upvotes += 1;
				});
			};

			return o;
		}

	]
);