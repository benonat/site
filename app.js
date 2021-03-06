/*
 <script src="bower_components/angular/angular.js"></script>
 <script src="bower_components/angular-route/angular-route.js"></script>

 <script src="app.js"></script>
 <script src="view1/view1.js"></script>
 <script src="view2/view2.js"></script>
 */
require.config({
  "appDir": "",
  "baseUrl": ".",
  "waitTimeout": 30,

  paths:{
    "angular": 'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min',
    "jquery": 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',
    "angular-route": "bower_components/angular-route/angular-route.min",
    "domReady": "https://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min"
  },
  shim:{
    angular: {
      "deps": ["jquery"],
      exports: "angular"
    },
    "angular-route":{
      deps: ["angular"]
    }
  }

});

define(function(require){
  'use strict';
  var domReady = require("domReady"),
      angular = require("angular");

  domReady(function(){
    require("angular-route");

    var appMod = require("appModules.min");
    appMod.config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/blog'});
    }]);

    angular.bootstrap(document, ['mainSite']);
  });

});

