app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            template: " "
        })
        .when('/projects', {
            templateUrl: 'partials/projects.html',
            controller: 'projectsController'
        })
        .when('/about', {
            templateUrl: 'partials/about.html'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});