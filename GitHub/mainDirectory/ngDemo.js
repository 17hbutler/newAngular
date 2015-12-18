/**
 * Created by harris.butler on 12/17/2015.
 */
var ngDemo = angular.module('ngDemo', ['ngRoute']);

ngDemo.config(function($routeProvider)
{
    $routeProvider
        .when('/',
            {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
        .when('/clubs',
            {
                templateUrl : 'pages/clubs.html',
                controller  : 'clubsController'
            })
        .when('/golfBalls',
            {
                templateUrl : 'pages/golfBalls.html',
                controller  : 'golfBallsController'
            })
        .when('/accessories',
            {
                templateUrl : 'pages/accessories.html',
                controller  : 'accessoriesController'
            });
});

ngDemo.controller('mainController', function($scope)
{
    $scope.message = 'Buy some stuff';
});

ngDemo.controller('clubsController', function($scope)
{
    $scope.price = 349.99;
});

ngDemo.controller('golfBallsController', function($scope)
{
    $scope.quantity1 = 1;
    $scope.quantity2 = 1;
    $scope.quantity3 = 1;
    $scope.quantity4 = 1;
    $scope.price1 = 12.99;
    $scope.price2 = 12.99;
    $scope.price3 = 10.99;
    $scope.price4 = 10.99;
});


$(document).on('click','.navbar-collapse.in',function(e)
{
    if( $(e.target).is('a') )
    {
        $(this).collapse('hide');
    }
});
