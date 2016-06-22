'use strict';

const widgetModule = angular.module('mygov.widget.info.base', [])
  .config(['$stateProvider', function ($stateProvider, $log) {
    $stateProvider
      .state('sampleinfo', {
        url: '/sampleinfo',
        template: '<sampleinfo></sampleinfo>'
      })
   
  }])
  .component('sampleinfo', {
    templateUrl: require('./index.html'),
    controller: ['$scope', function ($scope) {

    }]
  });

module.exports = widgetModule;
