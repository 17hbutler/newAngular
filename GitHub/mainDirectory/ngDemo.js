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
    $scope.message = 'See what cool things Angular can do!';
});

ngDemo.controller('clubsController', function($scope)
{

});

ngDemo.controller('golfBallsController', function($scope)
{
    $scope.quantity = 1;
    $scope.price = 12.99;
});

ngDemo.controller('accessoriesController', function($scope)
{
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function()
    {
        return $scope.firstName + " " + $scope.lastName;
    }
});

$(document).on('click','.navbar-collapse.in',function(e)
{
    if( $(e.target).is('a') )
    {
        $(this).collapse('hide');
    }
});
