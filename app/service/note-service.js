'use strict';

const angular = require('angular');
angular.module('noteApp').factory('noteService', ['$q', '$http', noteService]);

function noteService($q, $http){
  const service = {};

  const requestConfig = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  service.createNote = function(data){
    return $q((resolve, reject) => {
      $http.post(`${__API_URL__}/api/note`, data, requestConfig)
        .then( res => {
          resolve(res.data);
        }, err => {
          reject(err);
        })
    })
  };

  service.deleteNote = function(noteId){
    return $q((resolve, reject) => {
      $http.delete(`${__API_URL__}/api/note/${noteId}`, requestConfig)
        .then( res => {
          resolve(res.data);
        }, err => {
          reject(err);
        })
    })
  };

  return service;
};
