'use strict';

require('./create-list-form.scss');
const angular = require('angular');
angular.module('noteApp').directive('appCreateListForm', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./create-list-form.html'),
    controller: ['listService', CreateListFormController],
    controllerAs: 'createListFormCtrl',
    bindToController: true,
    scope: {},
  }
});

function CreateListFormController(listService){
  this.list = {};
  this.err = null;

  this.createList = function(){
    listService.createList(this.list)
      .then((list) => {
        console.log('BOOOYA');
        console.log(list);
        this.list = {};
        this.err = null;
      }, (err) => {
        console.error('err');
        this.err = !!err;
      })
  }
}
