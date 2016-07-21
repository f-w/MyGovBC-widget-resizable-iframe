'use strict';

let iFrameResize = require('iframe-resizer').iframeResizer

const widgetModule = angular.module('mygov.widget.iframe.base', [])
  .config(['$stateProvider', function ($stateProvider, $log) {
    $stateProvider
      .state('resizable-iframe', {
        url: '/resizable-iframe',
        template: '<iframebase></iframebase>'
      })

  }])
  .component('iframebase', {
    templateUrl: require('./index.html'),
    controller: ['$scope', function ($scope) {
      $scope.$on('$viewContentLoaded', function () {
        iFrameResize({
          messageCallback: function (messageData) {
            alert(messageData.message)
          },
          heightCalculationMethod: 'bodyScroll'
        })
      })
    }]
  });

module.exports = widgetModule;
