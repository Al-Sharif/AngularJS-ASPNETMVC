var ngApp = angular.module('ngApp', []);
ngApp.controller('HomeController', HomeController);

var configFunction = Function($routeProvider){
    $routeProvider.
        when('/routeOne',{
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo', {
            templateUrl: 'routesDemo/Two'
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/Three'
        });
    
}
configFunction.$inject = ['$routeProvider'];
ngApp.config(configFunction);