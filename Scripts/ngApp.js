var ngApp = angular.module('ngApp', ['ngRoute']);
ngApp.controller('HomeController', HomeController);

var configFunction = function($routeProvider){
    $routeProvider.
        when('/routeOne',{
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo', {
            templateUrl: 'routesDemo/two'
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
    
}
configFunction.$inject = ['$routeProvider'];
ngApp.config(configFunction);