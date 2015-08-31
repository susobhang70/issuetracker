angular.module('issuetracker', ['ui.router', 'templates'])
.config
(
	[
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider)
		{
			$stateProvider
			.state
			(
				'index',
				{
					url: '/index',
					templateUrl: 'index/_index.html',
					controller: 'IndexCtrl',
				}
			);

			$stateProvider
			.state
			(
				'projectindex',
				{
					url: '/projects',
					templateUrl: 'projects/_projects.html',
					controller: 'ProjectsCtrl',
					resolve:
					{
						projectPromise:
						[
							'projects',
							function(projects)
							{
								return projects.getAll();
							}
						]
					}
				}
			);

			$stateProvider
			.state
			(
				'project',
				{
					url: '/projects/{id}',
					templateUrl: 'issues/_issues.html',
					controller: 'IssuesCtrl',
					resolve:
					{
						project:
						[
							'$stateParams',
							'projects',
							function($stateParams, projects)
							{
								return projects.getProject($stateParams.id);
							}
						]
					}
				}
			);

			$urlRouterProvider.otherwise('index');
		}
	]
);