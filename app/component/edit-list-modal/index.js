'use strict';

require('./edit-list-modal.scss');
const angular = require('angular');
angular.module('noteApp').directive('appEditListModal', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./edit-list-modal.html'),
    scope: {
      list: '=',
      updateList: '&',
      cancelUpdate: '&',
    }
  };
});
