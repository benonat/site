define(function(require){
  'use strict';

  var angular = require("angular"),
      name = 'mainSite.folio';

  var mod = angular.module(name, ['ngRoute']);
  mod.$inject = ['$routeProvider'];
  mod.config(function($routeProvider) {
    $routeProvider.when('/stuff', {
      templateUrl: 'viewFolio/folio.html',
      controller: 'folioCtrl',
      controllerAs: 'folioCtrl'
    });
  });

  ctrl.$inject = ["$http"];
  mod.controller('folioCtrl', ctrl);
  return mod;

  function ctrl($http) {
  }

});
