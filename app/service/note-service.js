'use strict';

const angular = require('angular');
angular.module('noteApp').factory('noteService', ['$q','$log', '$http', noteService]);

function noteService($q, $log, $http){
  const service = {};

  const requestConfig = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  service.createNote = function(data){
    $log.debug('noteService.createNote');
    return $q((resolve, reject) => {
      $http.post(`${__API_URL__}/api/note`, data, requestConfig)
        .then( res => {
          resolve(res.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  };

  service.deleteNote = function(noteId){
    $log.debug('noteService.deleteNote');
    return $q((resolve, reject) => {
      $http.delete(`${__API_URL__}/api/note/${noteId}`, requestConfig)
        .then( res => {
          resolve(res.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  };

  return service;
};
