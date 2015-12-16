/**
 * Created by harris.butler on 12/10/2015.
 */
var myAngular = angular.module('myAngular', [ngRoute]);

myAngular.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/clubs',{
            templateUrl : 'pages/clubs.html',
            controller  : 'clubsController'
        })
});
myAngular.controller('mainController', function($scope)
{
    $scope.message = 'See what cool things Angular can do!';
});
myAngular.controller(clubsController, function($scope){
   $scope.message = "this is the club section of the web page.";
});