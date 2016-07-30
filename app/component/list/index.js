'use strict';

require('./list.scss');
const angular = require('angular');
angular.module('noteApp').directive('appList', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./list.html'),
    controller: ['noteService', ListController],
    controllerAs: 'listCtrl',
    bindToController: true,
    scope: {
      list: '=',
    }
  }
});

function ListController(noteService){
  this.deleteNote = function(noteId){
    noteService.deleteNote(noteId)
      .then( note => {
        console.log('boooy');
        this.list.notes = this.list.notes.filter( note => {
          if (note._id === noteId) return false;
          return true;
        });
      }, (err) => {
        console.error(err)
      });
  };
}

