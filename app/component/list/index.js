'use strict';

require('./list.scss');
const angular = require('angular');
angular.module('noteApp').directive('appList', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./list.html'),
    controller: [ListController],
    controllerAs: 'listCtrl',
    bindToController: true,
    scope: {
      list: '=',
    }
  }
});

function ListController(){
}

