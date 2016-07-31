'use strict';

const angular = require('angular');

angular.module('noteApp').factory('listService',  ['$q', '$log', '$http', 'noteService', listService]);

function listService($q, $log, $http, noteService){
  const service = {};
  service.lists = [];

  const requestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };

  service.getLists = function(){
    $log.debug('listService.getLists');
    return $q((resolve, reject) => {
      $http.get(`${__API_URL__}/api/list`, requestConfig)
        .then((res) => {
          this.lists = res.data;
          resolve(this.lists);
        })
        .catch( (err) => {
          reject(err);
        });
    });
  };

  service.createList = function(data){
    $log.debug('listService.createList');
    if (!data || !data.name) return $q.reject(new Error('list requires name'));
    return $q((resolve, reject) => {
      $http.post(`${__API_URL__}/api/list`, data, requestConfig)
        .then((res) => {
          this.lists.push(res.data);
          resolve(res.body);
        }, (err) => {
          reject(err);
        });
    });
  };

  service.deleteList = function(listId){
    $log.debug('listService.deleteList');
    return $q((resolve, reject) => {
      $http.delete(`${__API_URL__}/api/list/${listId}`)
        .then((res) => {
          this.lists.forEach((list, index) => {
            if (list._id === listId) this.lists.splice(index, 1);
          })
          resolve(res.data);
        }, err => {
          reject(err);
        });
    });  
  };

  return service;
}

