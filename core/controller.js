ebuzz.controller('mainController', ['$scope', function ($scope) {
    $scope.title = "ebuzz";
}]);

ebuzz.controller('moviesController', ['$scope', '$http', function ($scope, $http) {
    $scope.title = "Movies";
    $http.get('../data/movies.json').then(function (data) {
        $scope.mytemp1 = true;
        $scope.mytemp = false;
        $scope.mytemp2  = false;
        $scope.mytemp3 = false;
        $scope.music_data = data.data;
    }, function (data) {
        console.log(data.data);
    });

    $scope.get_desc = function (x, y, z) {
        $scope.mytemp = true;
        $scope.mytemp1 = false;
        $scope.mytemp2 = false;
        $scope.mytemp3 = false;
        $scope.album_name = x;
        $scope.temp_desc = y;
        $scope.music_data = z;
    }

    $scope.toggle = function () {
        $scope.mytemp = false;
        $scope.mytemp1 = true;
        $scope.mytemp2 = false;
        $scope.mytemp3  = false;
        $http.get('../data/movies.json').then(function (data) {
            $scope.music_data = data.data;
        }, function (data) {
            console.log(data.data);
        });

    }

    $scope.get_desc_album = function (x) {
        document.getElementById('texts-side-content').innerHTML = x;
    }

$scope.get_artist = function () {
         var arr = [];
        $scope.mytemp2 = true;
        $scope.mytemp = false;
        $scope.mytemp1 = false;
        $http.get('../data/movies.json').then(function (data) {
            $scope.music_data1 = data.data;
            console.log(($scope.music_data1));
        }, function (data) {
            console.log(data.data);
        });

    }
    $scope.get_desc1 = function( x , te){
        console.log(te);
        $scope.temp_data1  = te;
        $scope.singer__name = x;
        $scope.mytemp3 = true;
        $scope.mytemp = false;
        $scope.mytemp1 = false;
        $scope.mytemp2 = false;
    }
     $scope.toggle1 = function () {
        $scope.mytemp = false;
        $scope.mytemp3 = false;
         $scope.mytemp2 =true;
        $scope.mytemp3 = false;
        $http.get('../data/movies.json').then(function (data) {
            $scope.music_data = data.data;
        }, function (data) {
            console.log(data.data);
        });

    }

$scope.til = 'ebuzz';
}]);



ebuzz.controller('gamesController', ['$scope', '$http', function ($scope, $http) {
    $scope.title = "Games";
    $http.get('../data/games.json').then(function (data) {
        $scope.mytemp1 = true;
        $scope.mytemp = false;
        $scope.music_data = data.data;
    }, function (data) {
        console.log(data.data);
    });

    $scope.get_desc = function (x, y, z) {
        $scope.mytemp = true;
        $scope.mytemp1 = false;
        $scope.album_name = x;
        $scope.temp_desc = y;
        $scope.music_data = z;
    }

    $scope.toggle = function () {
        $scope.mytemp = false;
        $scope.mytemp1 = true;
        $http.get('../data/games.json').then(function (data) {
            $scope.music_data = data.data;
        }, function (data) {
            console.log(data.data);
        });

    }

    $scope.get_desc_album = function (x) {
        document.getElementById('texts-side-content').innerHTML = x;
    }

$scope.til = 'ebuzz';
}]);

ebuzz.controller('musicController', ['$scope', '$http', function ($scope, $http) {
    $scope.title = "Music";
    //Api to get the music json.
    $http.get('../data/music.json').then(function (data) {
        $scope.mytemp1 = true;
        $scope.mytemp = false;
        // $scope.mytemp2 = false;
        $scope.music_data = data.data;
    }, function (data) {
        console.log(data.data);
    });

    $scope.get_desc = function (x, y, z) {
        $scope.mytemp = true;
        $scope.mytemp1 = false;
        $scope.album_name = x;
        $scope.temp_desc = y;
        $scope.music_data = z;
    }

    $scope.toggle = function () {
        $scope.mytemp = false;
        $scope.mytemp1 = true;
        $scope.mytemp2 = false;
        $scope.mytemp3  = false; 
        $http.get('../data/music.json').then(function (data) {
            $scope.music_data = data.data;
        }, function (data) {
            console.log(data.data);
        });

    }

    $scope.get_desc_album = function (x) {
        document.getElementById('texts-side-content').innerHTML = x;
    }

    $scope.get_artist = function () {
         var arr = [];
        $scope.mytemp2 = true;
        $scope.mytemp = false;
        $scope.mytemp1 = false;
        $http.get('../data/music.json').then(function (data) {
            $scope.music_data1 = data.data;
            console.log(($scope.music_data1));
        }, function (data) {
            console.log(data.data);
        });

    }
    $scope.get_desc1 = function( x , te){
        console.log(te);
        $scope.temp_data1  = te;
        $scope.singer__name = x;
        $scope.mytemp3 = true;
        $scope.mytemp = false;
        $scope.mytemp1 = false;
        $scope.mytemp2 = false;
    }
     $scope.toggle1 = function () {
        $scope.mytemp = false;
        $scope.mytemp3 = false;
         $scope.mytemp2 =true;
        $scope.mytemp3 = false;
        $http.get('../data/music.json').then(function (data) {
            $scope.music_data = data.data;
        }, function (data) {
            console.log(data.data);
        });

    }

    $scope.til = 'ebuzz';
}]);