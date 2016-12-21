exports.seed = function(knex, Promise) {

    return knex('user_moods').del()
        .then(function() {
            return Promise.all([
                knex('user_moods').insert({
                  users_id: 1,
                  mood: 'anxious',
                  rating: -1,
                  created_at: '2016-12-20T17:08:09.398Z'
                }),
                knex('user_moods').insert({
                  users_id: 1,
                  mood: 'hungry',
                  rating: -1,
                  created_at: '2016-12-19T17:08:09.398Z'
                }),
                knex('user_moods').insert({
                  users_id: 1,
                  mood: 'relaxed',
                  rating: 0,
                  created_at: '2015-12-20T17:08:09.398Z'
                }),
                knex('user_moods').insert({
                  users_id: 2,
                  mood: 'calm',
                  rating: 1
                }),
                knex('user_moods').insert({
                  users_id: 2,
                  mood: 'angry',
                  rating: -1
                }),
                knex('user_moods').insert({
                  users_id: 2,
                  mood: 'exhausted',
                  rating: -1
                }),
                knex('user_moods').insert({
                  users_id: 3,
                  mood: 'self-conscious',
                  rating: -1
                }),
                knex('user_moods').insert({
                  users_id: 3,
                  mood: 'happy',
                  rating: 1
                }),
                knex('user_moods').insert({
                  users_id: 3,
                  mood: 'relaxed',
                  rating: 0
                })
            ]);
        });
};
