'use strict';

const angular = require('angular');

angular.module('noteApp').factory('listService',  ['$q', '$http', 'noteService', listService]);

function listService($q, $http, noteService){
  const service = {};
  service.lists = [];

  const requestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };

  service.getLists = function(){
    return $q((resolve, reject) => {
      $http.get(`${__API_URL__}/api/list`, requestConfig)
        .then((res) => {
          this.lists = res.data;
          resolve(this.lists);
        }, (err) => {
          console.error(err);
          reject(err);
        });
    });
  };

  service.createList = function(data){
    console.log('data', data);
    return $q((resolve, reject) => {
      $http.post(`${__API_URL__}/api/list`, data, requestConfig)
        .then((res) => {
          this.lists.push(res.data);
          resolve(res.body);
        }, (err) => {
          console.error(err);
          reject(err);
        });
    });
  };

  //service.deleteNote = function(noteId){
    //return $q((resolve, reject) => {
      //noteService.deleteNote(noteId)
        //.then( note => {
          //this.list.notes.filter(note => {
            //if (note._id === noteId) return false;
            //return true;
          //})     
        //}, (err) => {
          //reject(err);
        //})
    //});
  //};

  return service;
}

