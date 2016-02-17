'use strict';
var app = angular

	.module('app', ['ngAnimate', 'filters', 'ui.bootstrap', 'angular-parallax', 'duScroll', 'ngTouch', 'angulartics', 'angulartics.google.analytics', 'angulartics.scroll'])

	.controller('instagramCtrl', [ '$scope', '$http',
    function($scope, $http) {
      var instagram_json = 'https://api.instagram.com/v1/users/2945233630/media/recent/?client_id=8a5f05fceb2c42299239597c6ded2f8e&count=4&callback=JSON_CALLBACK'
      $http.jsonp( instagram_json )
        .success(function(response) {
          $scope.photos = response.data;
        });
    }
  ]);
