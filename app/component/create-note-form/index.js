'use strict';

require('./create-note-form.scss');
const angular = require('angular');
angular.module('noteApp').directive('appCreateNoteForm', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./create-note-form.html'),
    controller: ['noteService', CreateNoteFormController],
    controllerAs: 'createNoteFormCtrl',
    bindToController: true,
    scope: {
      list: '=',
    },
  }
});

function CreateNoteFormController(noteService){
  this.note = {};
  this.createNote = function(){
    this.note.listId = this.list._id;
    noteService.createNote(this.note)
      .then( note => {
        this.list.notes.push(note);
        this.note = {};
      }, err => {
        console.error(err);
      })
  }
}
