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

			$urlRouterProvider.otherwise('index');
		}
	]
);