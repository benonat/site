define(function(require) {
  'use strict';

  var wpServiceName = require("service/wp_service.min"),
      angular = require("angular"),
      name = 'mainSite.blog';

  var mod = angular.module(name, ['ngRoute']);
  mod.$inject = ['$routeProvider'];
  mod.config(function ($routeProvider) {
    $routeProvider.when('/blog', {
      templateUrl: 'viewBlog/blog.html',
      controller: 'blogCtrl',
      controllerAs: 'blogCtrl'
    });
  });

  ctrl.$inject = ["$http", '$sce', '$q', wpServiceName];
  mod.controller('blogCtrl', ctrl);
  return mod;

  function ctrl($http, $sce, $q, wpService) {

    //http://wp-api.org/#posts_retrieve-posts
    //http://v2.wp-api.org/reference/posts/

    var self = this;
    self.toggle = toggle;
    self.display = display;
    self.entries = [];
    self.authorCache = [];
    self.excerptImages = {};

    var options = {
      year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    var today = new Date();

    wpService.getPost(today.getMonth() +1, today.getFullYear())
        .then(function(res){
          for (var key in res) {
            fetchExcerptImage(res[key].featured_image);

            var da = new Date(res[key].date);

            //hide default show more link
            res[key].excerpt.rendered = res[key].excerpt.rendered.replace(/ &hellip; <a.*<\/a>/,"&hellip;");
            self.entries.push({
              title: $sce.trustAsHtml(res[key].title.rendered),
              content: $sce.trustAsHtml(res[key].content.rendered),
              excerpt: $sce.trustAsHtml(res[key].excerpt.rendered),
              excerptImage: res[key].featured_image,
              displayExcerpt: true,
              date: da.toLocaleDateString("en-US", options),
              author: res[key].author
            });
          }
        });

    wpService.getAllAuthors()
        .then(function(res){
          for(var i in res){
            self.authorCache[res[i].id] = res[i];
          }
        });

    function fetchExcerptImage(id){
      wpService.getMedia(id)
          .then(function(res){
            self.excerptImages[id]= res.media_details.sizes.large.source_url;
          });
    }
    function display(entry){

      if(entry.displayExcerpt){
        return entry.excerpt;
      }
      else{
        return entry.content;
      }
    }

    function toggle(obj){
      obj.displayExcerpt = !obj.displayExcerpt;
    }
  }
});
