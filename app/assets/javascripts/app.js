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
				'projects',
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

			$urlRouterProvider.otherwise('index');
		}
	]
);