var bookReview = angular.module('bookReview', ['ngRoute'])
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
 
 bookReview.controller('bookController', ['$scope','$http',function($scope,$http){
        
         $http.get('http://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=9aa4f841c860bb510695c9a5ef49eb4e%3A8%3A74093662')
        .success(function(data){
            console.log("success"); 
            $scope.summary = data.results[0].headline; 
            
        })
        .error(function(data){
            console.log('fail'); 
        })
}])