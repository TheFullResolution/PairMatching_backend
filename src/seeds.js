// src/seeds.js

const feathers = require('feathers-client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const host = 'http://localhost:3030';
const app = feathers().configure(feathers.hooks()).configure(feathers.authentication({type: 'local'})).configure(rest(host).superagent(superagent));

// services
const userService = app.service('users');

// const users = [
// {
//   name: 'Linda',
//   lastname: 'Ward',
//   email: 'lward0@diigo.com',
//   password: 'gravida'
// }, {
//   name: 'Kimberly',
//   lastname: 'Little',
//   email: 'klittle1@europa.eu',
//   password: 'aliquam'
// }, {
//   name: 'Jacqueline',
//   lastname: 'Romero',
//   email: 'jromero2@google.es',
//   password: 'dolor'
// }, {
//   name: 'Charles',
//   lastname: 'Smith',
//   email: 'csmith3@ftc.gov',
//   password: 'cursus'
// }, {
//   name: 'Karen',
//   lastname: 'Schmidt',
//   email: 'kschmidt4@indiegogo.com',
//   password: 'scelerisque'
// }, {
//   name: 'Jessica',
//   lastname: 'Jordan',
//   email: 'jjordan5@wikimedia.org',
//   password: 'duis'
// }, {
//   name: 'Brandon',
//   lastname: 'Flores',
//   email: 'bflores6@shinystat.com',
//   password: 'quam'
// }, {
//   name: 'Elizabeth',
//   lastname: 'Knight',
//   email: 'eknight7@sitemeter.com',
//   password: 'suscipit'
// }, {
//   name: 'Terry',
//   lastname: 'Perez',
//   email: 'tperez8@marriott.com',
//   password: 'congue'
// }, {
//   name: 'Tammy',
//   lastname: 'West',
//   email: 'twest9@gravatar.com',
//   password: 'viverra'
// }, {
//   name: 'Carolyn',
//   lastname: 'Hunter',
//   email: 'chuntera@networkadvertising.org',
//   password: 'in'
// }, {
//   name: 'Phillip',
//   lastname: 'Jenkins',
//   email: 'pjenkinsb@comsenz.com',
//   password: 'suspendisse'
// }, {
//   name: 'Mildred',
//   lastname: 'Owens',
//   email: 'mowensc@plala.or.jp',
//   password: 'sem'
// }, {
//   name: 'Matthew',
//   lastname: 'Scott',
//   email: 'mscottd@purevolume.com',
//   password: 'nisl'
// }, {
//   name: 'Jimmy',
//   lastname: 'Matthews',
//   email: 'jmatthewse@si.edu',
//   password: 'ut'
// }, {
//   name: 'Jack',
//   lastname: 'Stephens',
//   email: 'jstephensf@arstechnica.com',
//   password: 'curae'
// }, {
//   name: 'Stephen',
//   lastname: 'Romero',
//   email: 'sromerog@latimes.com',
//   password: 'integer'
// }, {
//   name: 'Sandra',
//   lastname: 'Meyer',
//   email: 'smeyerh@buzzfeed.com',
//   password: 'hendrerit'
// }, {
//   name: 'Anthony',
//   lastname: 'Turner',
//   email: 'aturneri@sfgate.com',
//   password: 'duis'
// }, {
//   name: 'Jeremy',
//   lastname: 'Fisher',
//   email: 'jfisherj@cnn.com',
//   password: 'eleifend'
// }];
//
// // Seed the user and recipe!
// users.map((user) => {
//   userService.create(user).then((result) => {
//     console.log('User created');
//   }).catch((error) => {
//     console.error('Error creating user!', error);
//   });
// });
