'use strict';

const angular = require('angular');

angular.module('noteApp').factory('listService',  ['$q', '$http', listService]);

function listService($q, $http){
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
          this.lists.push(res.body);
          resolve(res.body);
        }, (err) => {
          console.error(err);
          reject(err);
        });
    });
  };

  return service;
}

