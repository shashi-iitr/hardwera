(function() {
    
    var app = angular.module('adminApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'DashboardController',
                templateUrl: 'app/views/dashboard.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());