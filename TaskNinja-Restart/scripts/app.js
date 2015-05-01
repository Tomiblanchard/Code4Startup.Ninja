'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngToast',
    'ngMoment',
    'firebase'
  ])
  .constant('FURL', 'https://task-ninja1994.firebaseio.com/')
  .config(function ($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'TaskController'
      })
      .when('/post', }{
        templateUrl: 'views/post.html',
        controller: 'TaskController'
      })
      .when('/edit/:taskId', {
        templateUrl: 'views/edit.html',
        controller: 'TaskController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
