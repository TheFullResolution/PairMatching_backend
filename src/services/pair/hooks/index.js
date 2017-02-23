'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const common = require('feathers-hooks-common');

const populateBuddy = common.populate('members', { service: 'users', field: 'members' });

const checkPair = require('./checkPair.js');
const getTodayPair = require('./getTodayPair.js');

exports.before = {
  all: [
    // auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [checkPair()],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [getTodayPair, populateBuddy],
  get: [populateBuddy],
  create: [populateBuddy],
  update: [],
  patch: [],
  remove: []
};
