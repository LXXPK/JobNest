
var app = angular.module('myApp', []);


   

app.controller('myCtrl', function($scope, $window) {
    // Load users data from localStorage
    $scope.users = JSON.parse(localStorage.getItem('users')) || [];
    $scope.post_users = JSON.parse(localStorage.getItem('post_users')) || [];
    $scope.jobs= JSON.parse(localStorage.getItem('jobs')) || [];
    $scope.isLoggedIn = false;
    $scope.isLoggedInemp = false;

   
   
    

    $scope.alldelete = function() {
        localStorage.clear();
       
        
        alert("successfully deleted the all  data ");
    };
    $scope.deleteUserData = function() {
        localStorage.removeItem('users');
        
        $scope.users = [];
        alert("successfully deleted the user data ");
    };

    $scope.deleteJobsData = function() {
        localStorage.removeItem('jobs');
       
        $scope.jobs = [];
        alert("successfully deleted the jobs data ")

    };

    
    // only for searchers 
    $scope.pushuser = function(ns) {
        var isDuplicate = false;
        angular.forEach($scope.users, function(user) {
            if (user.username === ns.username || user.email === ns.email) {
                isDuplicate = true;
            }
        });
        if (isDuplicate) {
            alert('Username or email already exists! Please choose a different one.');
        } else {

            $scope.users.push(ns);
            // Save users data to localStorage
            localStorage.setItem('users', JSON.stringify($scope.users));
            $window.location.href = 'login.html';
        }
    };
    
    $scope.check = function(ns) {
        var isFound = false;
       

        angular.forEach($scope.users, function(user) {
            if (  user.email === ns.email && user.password === ns.password) {
                isFound = true;
            }
        });
        if (isFound) {
            $scope.isLoggedIn = true;
            console.log($scope.isLoggedIn)
            $window.location.href = 'profile.html';
           
        } else {
            alert('Email or password is incorrect! Please try again.');
        }
        

    };

    
    // $scope.goToBrowseJobs = function() {
    //     if ($scope.isLoggedIn) {
    //         $window.location.href = 'search.html';
    //     } 
      
    //     else{
    //         alert("nothing ")
    //     }
    // };


    $scope.goToBrowseJobs = function() {
        console.log("goToBrowseJobs() function called");
        if ($scope.isLoggedIn) {
            console.log("$scope.isLoggedIn is true");
            $window.location.href = 'search.html';
        } else if ($scope.isLoggedInemp) {
            console.log("$scope.isLoggedInemp is true");
            $window.location.href = 'search.html';
        } else {
            console.log("Neither $scope.isLoggedIn nor $scope.isLoggedInemp is true");
            alert("Nothing");
        }
    };
    

    // only for employers  
    $scope.pushpostuser = function(ns) {
        
        var isDuplicate = false;
        angular.forEach($scope.post_users, function(post_user) {
            if (post_user.username === ns.username || post_user.email === ns.email) {
                isDuplicate = true;
            }
        });
        if (isDuplicate) {
            alert('Username or email already exists! Please choose a different one.');
        } else {
            $scope.post_users.push(ns);
            // Save users data to localStorage
            localStorage.setItem('post_users', JSON.stringify($scope.post_users));
            $window.location.href = 'post_login.html';
        }
        
   
    };

    

    $scope.emp_check = function(ns) {
        var isFound = false;

        angular.forEach($scope.post_users, function(post_user) {
            if (post_user.password === ns.password && post_user.email === ns.email) {
                isFound = true;
            }
        });
        if (isFound) {
            $scope.isLoggedInemp = !$scope.isLoggedInemp;
            $window.location.href = 'emp_profile.html';
           
        } else {
            alert('Email or password is incorrect! Please try again.');
        }
        

    };

    $scope.post = function(p) {
        var isDuplicate = false;
       
        angular.forEach($scope.jobs, function(job) {
            if (job.jobtitle === p.jobtitle || job.companyname === p.companyname ||job.joblocation===p.joblocation ||job.jobcategory===p.jobcategory ||job.type===p.type) {
                isDuplicate = true;
            }
        });
        if (isDuplicate) {
            alert('Multiple entry is not allowed ');
        } else {
            $scope.jobs.push(p);
        localStorage.setItem('jobs', JSON.stringify($scope.jobs));
        alert('job posted successfully');
        }
    // }
    // else{
    //     alert("please do login")
    // }
        
        


    };

    $scope.signout=function(){
        if ($scope.isLoggedIn) {
            $scope.isLoggedIn=false;
            console.log($scope.isLoggedIn);
            $window.location.href = 'login.html';
        } else  if ($scope.isLoggedInemp){
            $scope.isLoggedInemp=false;
            console.log($scope.isLoggedInemp);
            $window.location.href = 'post_login.html';
        }
        else{
           
        }
    };

    $scope.profile= function() {
        if ($scope.isLoggedIn) {
            $window.location.href = 'profile.html';
        } else  if ($scope.isLoggedInemp){
            $window.location.href = 'emp_profile.html';
        }
        else{
            alert("please do login")
        }
    };


   

    
});




// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope, $window) {
//     $scope.users = [{
//         username: 'kumar',
//         email: 'rr@gmail.com',
//         password: 'ramama'
//     }];
//     ns = {};
//     $scope.pushuser = function(ns) {
//         var isDuplicate = false;
//         // Check if the given username or email already exists
//         angular.forEach($scope.users, function(user) {
//             if (user.username === ns.username || user.email === ns.email) {
//                 isDuplicate = true;
//             }
//         });
//         if (isDuplicate) {
//             // Print error message or handle duplicate data
//             alert('Username or email already exists! Please choose a different one.');
//         } else {
//             // Push the data if it's not a duplicate
//             $scope.users.push(ns);
//             // Redirect to login.html page after successful signup
//             $window.location.href = 'login.html';
//         }
//     };
//     $scope.check = function(ns) {
//         var isDuplicate = false;
//         // Check if the given username or email already exists
//         angular.forEach($scope.users, function(user) {
//             if (user.password === ns.password || user.email === ns.email) {
//                 isDuplicate = true;
//             }
//         });
//         if (isDuplicate) {
           
             
//              // Redirect to login.html page after successful signup
//              $window.location.href = 'profile.html';
            
//         } else {
//            // Print error message or handle duplicate data
//            alert('email or password is not correct! Please try again .');
//         }
//     };
// });


// -------------------------------------------------------------------