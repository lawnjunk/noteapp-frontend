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
  listService.getLists()
    .then( lists => console.log(lists)
      , err => console.error('FUCK', err));
}
