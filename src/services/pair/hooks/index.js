'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const common = require('feathers-hooks-common');

const populateBuddy = common.populate('members', { service: 'users', field: 'members' });

const createPair = require('./createPair.js');
const findTodayPair = require('./findTodayPair.js');
const findExcludeToday = require('./findExcludeToday.js');

exports.before = {
  all: [
    auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [createPair()],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [findTodayPair, findExcludeToday, populateBuddy],
  get: [populateBuddy],
  create: [populateBuddy],
  update: [],
  patch: [],
  remove: []
};
