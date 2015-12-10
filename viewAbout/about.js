define(function(require){
  'use strict';

  var angular = require("angular"),
      name = 'mainSite.about';

  var mod = angular.module(name, ['ngRoute']);
  mod.$inject = ['$routeProvider'];
  mod.config(function($routeProvider) {
    $routeProvider.when('/me', {
      templateUrl: 'viewAbout/about.html',
      controller: 'aboutCtrl',
      controllerAs: 'aboutCtrl'
    });
  });

  ctrl.$inject = ["$http"];
  mod.controller('aboutCtrl', ctrl);
  return mod;

  function ctrl($http) {
  }

});
