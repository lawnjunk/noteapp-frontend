'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');

// angular module
angular.module('noteApp', []);

// angular services
require('./service/list-service.js');

// angular directives
require('./component/main');
require('./component/create-list-form');


