exports.seed = function(knex, Promise) {

    return knex('users').del()
        .then(function() {
            return Promise.all([

                knex('users').insert({
                  firstName: 'Ali',
                  lastName: 'Hobbs',
                  email: 'ali@ali.com',
                  password: '$2a$08$iKYQMgKVMtf4Txzf/rvS7.1.bgYudDxBpzz3Dkk24MogEhAnXYiZq'
                }),
                knex('users').insert({
                  firstName: 'Wade',
                  lastName: 'Meneley',
                  email: 'wade@wade.com',
                  password: '$2a$08$iKYQMgKVMtf4Txzf/rvS7.1.bgYudDxBpzz3Dkk24MogEhAnXYiZq'
                }),
                knex('users').insert({
                  firstName: 'Banana',
                  lastName: 'Apple',
                  email: 'banana@banana.com',
                  password: '$2a$08$iKYQMgKVMtf4Txzf/rvS7.1.bgYudDxBpzz3Dkk24MogEhAnXYiZq'
                }),

            ]);
        });
};
