'use strict';

require('./list.scss');
const angular = require('angular');
angular.module('noteApp').directive('appList', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./list.html'),
    controller: ['$log', 'noteService', 'listService', ListController],
    controllerAs: 'listCtrl',
    bindToController: true,
    scope: {
      list: '=',
      //deleteList: '&',
    }
  }
});

function ListController( $log, noteService, listService){
  this.deleteNote = function(noteId){
    $log.debug('listCtrl.deleteNote');
    noteService.deleteNote(noteId)
      .then( note => {
        this.list.notes.forEach((note, index) => {
          if (note._id === noteId) this.list.notes.splice(index, 1);
        });
      })
      .catch((err) => {
        $log.error(err);
      });
  };

  this.deleteList = function(noteId){
    $log.debug('listCtrl.deleteList');
    listService.deleteList(noteId)
      .then(() => {})
      .catch(err => $log.error(err));
  }
}

