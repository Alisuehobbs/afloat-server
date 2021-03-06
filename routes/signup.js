var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
    knex('users')
        .where('email', req.body.email)
        .then(function(user) {
            if (user.length === 0) {
                const hashed_password = bcrypt.hashSync(req.body.password, 8)

                const newUser = [{
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hashed_password
                }]

                knex('users')
                    .insert(newUser, 'id')
                    .then(function(user) {
                        const id = user[0]
                        const setupActivities = [{
                            users_id: id,
                            activity: req.body.activity1.toLowerCase(),
                            weight: 1
                        }, {
                            users_id: id,
                            activity: req.body.activity2.toLowerCase(),
                            weight: 1
                        }, {
                            users_id: id,
                            activity: req.body.activity3.toLowerCase(),
                            weight: 1
                        }]
                        knex('user_activities')
                            .insert(setupActivities, '*')
                            .then(function(data) {
                                newUser[0].id = data[0].users_id
                                delete newUser[0].password
                                res.json(newUser)
                            })
                    })
            } else {
                const error = {
                    message: 'Email is already in use. Please login.'
                }
                res.json(error)
            }

        })
})

router.get('/', function(req, res, next) {
    res.json('The server is working')
})


module.exports = router;
