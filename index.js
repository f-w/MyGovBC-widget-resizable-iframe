'use strict';

const widgetModule = angular.module('mygov.widget.info.base', [])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('sample-info', {
        url: '/sample/info',
        template: '<sample-info></sample-info>'
      })
   
  }])
  .component('sample-info', {
    templateUrl: require('./index.html'),
    controller: ['$scope', function ($scope) {
    }]
  });

module.exports = widgetModule;
