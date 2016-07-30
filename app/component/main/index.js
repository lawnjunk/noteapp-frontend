'use strict';

// webpack assets
require('./main.scss');

const angular = require('angular');

angular.module('noteApp').directive('appMain', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./main.html'),
    controller: ['listService', MainController],
    controllerAs: 'mainCtrl',
    bindToController: true,
    scope: {},
  }
});

function MainController(listService){
  this.apiURL = __API_URL__;
  this.lists = [];

  listService.getLists()
    .then( lists => {
      this.lists = listService.lists;
    }, err => console.error('FUCK', err));

  this.deleteList = function(listId) {
    listService.deleteList(listId)
      .then( list => {
        this.lists = this.lists.filter( list => {
          if(list._id === listId) return false;
          return true;
        });
      }, (err) => console.error(err));
  };
}
