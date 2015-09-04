angular.module('issuetracker', ['ui.router', 'templates','Devise'])
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
				'issues',
				{
					url: '/projects/{project_id}/issues/{id}',
					templateUrl: 'comments/_comments.html',
					controller: 'CommentsCtrl',
					resolve:
					{
						issue:
						[
							'$stateParams',
							'issues',
							function($stateParams, issues)
							{
								return issues.getIssue($stateParams.project_id, $stateParams.id);
							}
						]
					}
				}
			);

			$stateProvider
			.state
			(
				'projects',
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

			$stateProvider
		    .state
		    (
		    	'login', 
			    {
				    url: '/login',
				    templateUrl: 'auth/_login.html',
				    controller: 'AuthCtrl',
				    onEnter: 
				    [
					   	'$state', 
					   	'Auth', 
					   	function($state, Auth) 
					   	{
					     	Auth.currentUser().then(function ()
					      	{
					       		$state.go('projectindex');
					      	})
					   	}
				    ]		      
			    }
		    );

		    $stateProvider
		    .state
		    (
		    	'register', 
			    {
			      	url: '/register',
			      	templateUrl: 'auth/_register.html',
			      	controller: 'AuthCtrl',
			      	onEnter: 
				    [
					   	'$state', 
					   	'Auth', 
					   	function($state, Auth) 
					   	{
					     	Auth.currentUser().then(function ()
					      	{
					       		$state.go('projectindex');
					      	})
					   	}
				    ]
			    }
		    );

		    $stateProvider
		    .state
		    (
		    	'userindex', 
			    {
			      	url: '/users',
			      	templateUrl: 'users/_users.html',
			      	controller: 'UsersCtrl',
			      	resolve:
					{
						userPromise:
						[
							'users',
							function(users)
							{
								return users.getAll();
							}
						]
					}
			    }
		    );

		    $stateProvider
		    .state
		    (
		    	'users', 
			    {
			      	url: '/users/{id}',
					templateUrl: 'profile/_profile.html',
					controller: 'ProfileCtrl',

					resolve:
					{
						user:
						[
							'$stateParams',
							'$state',
							'users',
							'Auth',
							function($stateParams, $state, users, Auth)
							{
								
								console.log("going here", Auth._currentUser.id, $stateParams.id);
								if(Auth._currentUser.id == $stateParams.id)
								{	
									console.log("here");
									return users.getUser($stateParams.id);
								}	
								else
								{
									alert("Unauthorized access");
									window.location("#");
								}
							}
						]
					}
			    }
		    );		

			$urlRouterProvider.otherwise('index');
		}
	]
);