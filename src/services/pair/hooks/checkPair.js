'use strict';

const errors = require('feathers-errors');
const moment = require('moment');

function filterUsers(pairs, users) {
  var members_pairs = pairs.reduce(function(result, item) {
    return result.concat(item.members);
  }, []);

  var nonassigned = users.filter(function(item) {
    var look = members_pairs.findIndex(function(member) {
      return member._id.toString() === item._id.toString();
    });
    var id;
    if (look < 0) {
      id = 'non';
    } else {
      id = members_pairs[look]._id;
    }
    return item._id.toString() !== id.toString();
  });
  return nonassigned[Math.floor(Math.random() * nonassigned.length)];
}




module.exports = function(options) {
  return function(hook) {
    const today = moment().startOf('day');
    const tomorrow = moment(today).add(1, 'days');
    const userId = hook.params.user._id;
    return hook.app.service('pairs').find({
      paginate: false,
      query: {
        members: {
          $eq: userId
        },
        createdAt: {
          $gte: today.toDate(),
          $lt: tomorrow.toDate()
        }
      }
    }).then((pairs) => {
      if (pairs.length === 0) {
        return hook.app.service('users').find({
          paginate: false,
          query: {
            _id: {
              $ne: userId
            }
          }
        }).then((users) => {
          return hook.app.service('pairs').find({
            paginate: false,
            query: {
              createdAt: {
                $gte: today.toDate(),
                $lt: tomorrow.toDate()
              },
              $select: ['members']
            }
          }).then((pairs) => {
            var randomUser = filterUsers(pairs, users);
            hook.data.members = [randomUser._id, userId];
            return hook;
          });
        });
      } else {
        throw new errors.NotAcceptable('Pair has been created already');
      }
    });

  };
};
