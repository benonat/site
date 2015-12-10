define(function(require){
  'use strict';

  var angular = require("angular"),
      name = 'mainSite.resume';

  var mod = angular.module(name, ['ngRoute']);
  mod.$inject = ['$routeProvider'];
  mod.config(function($routeProvider) {
    $routeProvider.when('/profile', {
      templateUrl: 'viewResume/resume.html',
      controller: 'resumeCtrl',
      controllerAs: 'resumeCtrl'
    });
  });

  ctrl.$inject = ["$http"];
  mod.controller('resumeCtrl', ctrl);
  return mod;

  function ctrl($http) {
  }

});
