ebuzz.config([ '$routeProvider' , '$locationProvider' ,  function($routeProvider , $locationProvider){
    $routeProvider
     
     .when('/games' , {
        templateUrl : 'public/games.html',
        controller : 'gamesController'
    }) 
     .when('/movies' , {
        templateUrl : 'public/movies.html',
        controller : 'moviesController'
    }) 
     .when('/music' , {
        templateUrl : 'public/music.html',
        controller : 'musicController'
    }) 
       
    .otherwise({
       redirectTo :  '/music'
    }); 
    
    $locationProvider.hashPrefix('');
}]);