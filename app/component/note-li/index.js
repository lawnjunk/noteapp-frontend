'use strict';

require('./note-li.scss');
const angular = require('angular')
angular.module('noteApp').directive('appNoteLi', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./note-li.html'),
    controller: ['$log', 'listService', 'noteService', NoteLiController],
    controllerAs: 'noteLiCtrl',
    bindToController: true,
    scope: {
      note: '=',
      deleteNote: '&',
    },
  }
});

function NoteLiController( $log, listService, noteService){
  this.displayEditModal = false;

  this.editNote = function(){
    $log.debug('noteLiCtrl.editNote');
    this.backup = angular.copy(this.note);
    this.displayEditModal = true;
  }

  this.cancelUpdate = function(){
    $log.debug('noteLiCtrl.cancelUpdate');
    this.note.name = this.backup.name;
    this.note.content = this.backup.content;
    this.displayEditModal = false;
  }

  this.updateNote = function(note){
    $log.debug('noteLiCtrl.updateNote');
    noteService.updateNote(note)
      .then( note => {
        this.note.name = note.name;
        this.note.content = note.content;
        this.displayEditModal = false;
      })
      .catch(err => {
        $log.error(err);
        this.note.name = this.backup.name;
        this.note.content = this.backup.content;
        this.displayEditModal = false;
      });
  };
}
