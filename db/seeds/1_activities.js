exports.seed = function(knex, Promise) {

    return knex('user_activities').del()
        .then(function() {
            return Promise.all([
                knex('user_activities').insert({
                  users_id: 1,
                  activity: 'swimming'
                }),

                knex('user_activities').insert({
                  users_id: 2,
                  activity: 'playing guitar'
                }),

                knex('user_activities').insert({
                  users_id: 3,
                  activity: 'peeling'
                })
            ]);
        });
};
