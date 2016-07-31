'use strict';

require('./edit-note-modal.scss');
const angular = require('angular');
angular.module('noteApp').directive('appEditNoteModal', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./edit-note-modal.html'),
    controller: [EditNoteModalController],
    controllerAs: 'editNoteModalCtrl',
    bindToController: true,
    scope: {
      updateNote: '&',
      cancelUpdate: '&',
      note: '=',
    }
  }
});

function EditNoteModalController (){
  //this.note = angular.copy(this.backup);

  //this.cancelUpdate = function(){
    //this.updateNote({note: this.backup});
  //}
}
