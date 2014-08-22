'use strict';

/**
 * @ngdoc function
 * @name yeomanTutApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTutApp
 */
angular.module('yeomanTutApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
