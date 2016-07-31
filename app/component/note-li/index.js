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
    this.displayEditModal = true;
  }

  this.updateNote = function(){
    $log.debug('noteLiCtrl.updateNote');
    var original = angular.copy(this.note);
    noteService.updateNote(this.note)
      .then( note => {
        this.note.name = note.name;
        this.note.content = note.content;
        this.displayEditModal = false;
      })
      .catch(err => {
        $log.error(err);
        this.note.name = original.name;
        this.note.content = original.content;
      });

  };
}
