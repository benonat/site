define(function(require){
    var serviceModule = require("service/serviceModule.min"),
        about = require("viewAbout/about.min"),
        folio = require("viewFolio/folio.min"),
        blog = require("viewBlog/blog.min"),
        resume = require("viewResume/resume.min"),
        angular = require("angular");

    var mod = angular.module('mainSite', [
        'ngRoute',
        serviceModule.name,
        folio.name,
        blog.name,
        resume.name,
        about.name
    ]);
    return mod;
});