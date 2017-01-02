exports.seed = function(knex, Promise) {

    return knex('user_activities').del()
        .then(function() {
            return Promise.all([
                knex('user_activities').insert({
                  users_id: 1,
                  activity: 'swimming',
                  weight: 1
                }),

                knex('user_activities').insert({
                  users_id: 2,
                  activity: 'playing guitar',
                  weight: 1
                }),

                knex('user_activities').insert({
                  users_id: 3,
                  activity: 'peeling',
                  weight: 1
                })
            ]);
        });
};
