var bookReview = angular.module('bookReview', ['ngRoute'])
var movieData = 'http://api.nytimes.com/svc/movies/v2/reviews/all.json?';
var movieApi = 'api-key=da276d14ad8cc6a47669654550e53747%3A7%3A74022482'; 

//ROUTE
bookReview.config(function($routeProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html', 
        controller: 'homeController'
    })
    .when('/books', {
        templateUrl: 'pages/books.html', 
        controller: 'bookController'
    })
});


//SERVICE
bookReview.service('bookDescription', function(){
    this.bookD = 'Movie Review';
})


//CONTROLLERS
 bookReview.controller('homeController', ['$scope','bookDescription',function($scope, bookDescription){
        $scope.bookD = bookDescription.bookD; 
        $scope.$watch('bookD', function(){
            bookDescription.bookD=$scope.bookD; 
        })
 }]);
 
 bookReview.controller('bookController', ['$scope','$http','bookDescription',function($scope,$http){
    $scope.movieSummary = function(){
        $http.get('http://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=da276d14ad8cc6a47669654550e53747%3A7%3A74022482')
        .success(function(data){
            console.log("success"); 
            for(var i = 0; i < data.results.length; i++){
                $scope.summary = data.results[i].summary_short; 
            }
         
        })
        .error(function(data){
            console.log('fail'); 
        })
    }
}])