'use strict';

require('./edit-note-modal.scss');
const angular = require('angular');
angular.module('noteApp').directive('appEditNoteModal', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./edit-note-modal.html'),
    scope: {
      updateNote: '&',
      note: '=',
    }
  }
});
