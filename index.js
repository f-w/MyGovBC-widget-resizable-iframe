'use strict';

let iFrameResize = require('iframe-resizer').iframeResizer

const widgetModule = angular.module('mygov.widget.info.base', [])
  .config(['$stateProvider', function ($stateProvider, $log) {
    $stateProvider
      .state('resizable-iframe', {
        url: '/resizable-iframe',
        template: '<sampleinfo></sampleinfo>'
      })

  }])
  .component('sampleinfo', {
    templateUrl: require('./index.html'),
    controller: ['$scope', function ($scope) {
      $scope.$on('$viewContentLoaded', function () {
        iFrameResize({
          messageCallback: function (messageData) {
            alert(messageData.message)
          }
        })
      })
    }]
  });

module.exports = widgetModule;
