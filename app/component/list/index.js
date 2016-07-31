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
  this.displayEditList = false;

  this.editList = function(){
    $log.debug('listCtrl.editList');
    this.displayEditList = true;
    this.backup = angular.copy(this.list);
  }

  this.updateList = function(list){
    $log.debug('listCtrl.updateList');
    listService.updateList(list)
      .then(list => {
        this.list.name = list.name;
        this.displayEditList = false;
      })
      .catch( err => {
        this.list.name = this.backup.name;
        this.displayEditList = false;
      });
  }

  this.cancelUpdate = function(list){
    $log.debug('listCtrl.cancelUpdate');
    this.displayEditList = false;
    this.list.name = this.backup.name;
  }

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

