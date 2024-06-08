// app.js
var app = angular.module('myApp', ['ngRoute']);

// Configure routes
app.config(function($routeProvider) {
    $routeProvider
       .when('/home', {
            templateUrl: 'index.html',
            controller: 'homeController'
        })
        .when('/signup', {
            templateUrl: 'signup.html',
            controller: 'SignupController'
        })
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        })
        .when('/profile', {
            templateUrl: 'profile.html',
            controller: 'ProfileController'
        })
        .when('/post_job', {
            templateUrl: 'post_job.html',
            controller: 'postjobController'
        })
        .when('/search', {
            templateUrl: 'search.html',
            controller: 'searchController'
        })
        .when('/about_us', {
            templateUrl: 'about_us.html',
            controller: 'aboutusController'
        })
        .when('/contact_us', {
            templateUrl: 'contact_us.html',
            controller: 'contactusController'
        })
        
        
        
        .otherwise({
            redirectTo: '/home'
        });
});

// Signup controller
app.controller('SignupController', function($scope, $window) {
    $scope.signup = function() {
        // Assuming successful signup
        var userData = {
            username: $scope.username,
            email: $scope.email,
            password:$scope.password
            
        };
        // Store user data for later use
        localStorage.setItem('userData', JSON.stringify(userData));
        // Redirect to login page
        $window.location.href = '#/login';
    };
});
 



// Login controller
app.controller('LoginController', function($scope, $window) {
    $scope.login = function() {
        // Retrieve user data from local storage
        var userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && $scope.username === userData.username && $scope.password === userData.password) {
            // Successful login
            $window.location.href = '#/profile'; // Redirect to profile page
        } else {
            // Failed login
            $scope.error = 'Invalid username or password';
        }
    };
});

// Profile controller
app.controller('ProfileController', function($scope) {
    // Retrieve user data from local storage
    var userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        $scope.username = userData.username;
        $scope.email = userData.email;
        // Display user data in profile page
    } else {
        // Redirect to login page if user data not found
        $window.location.href = '#/login';
    }
});
