exports.seed = function(knex, Promise) {

    return knex('correlations').del()
        .then(function() {
            return Promise.all([
                knex('correlations').insert({
                  users_id: 1,
                  mood_id: 1,
                  activity_id: 1,
                  weight: 1
                }),
                knex('correlations').insert({
                  users_id: 2,
                  mood_id: 2,
                  activity_id: 2,
                  weight: 2
                }),
                knex('correlations').insert({
                  users_id: 3,
                  mood_id: 3,
                  activity_id: 3,
                  weight: 3
                })
            ]);
        });
};
