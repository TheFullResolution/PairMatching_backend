'use strict';

const moment = require('moment');

module.exports = function(hook) {
    if (hook.params.query.nottoday) {
        const today = moment().startOf('day');
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
                      $lt: today.toDate(),
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
