'use strict';

const errors = require('feathers-errors');
const moment = require('moment');

module.exports = function(hook) {
    if (hook.params.query.today) {
        const today = moment().startOf('day');
        const tomorrow = moment(today).add(1, 'days');
        const userId = hook.params.user._id;
        return hook.app
            .service('pairs')
            .find({
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
            })
            .then(pairs => {
                if (pairs.length !== 0) {
                   hook.result.data = pairs;
                }
            });
    }
};
