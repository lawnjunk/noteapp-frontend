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
require('./service/note-service.js');

// angular directives
require('./component/main');
require('./component/create-list-form');
require('./component/list');
require('./component/note-li');
require('./component/create-note-form');
require('./component/edit-note-modal');
require('./component/edit-list-modal');
