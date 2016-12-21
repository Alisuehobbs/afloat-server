var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');


router.post('/', function(req, res, next) {
    knex('users')
        .where('email', req.body.email)
        .first()
        .then(function(user) {
            if (user) {
                const passwordMatch = bcrypt.compareSync(req.body.password, user.password)
                if (passwordMatch === true) {
                    res.json(user)
                } else {
                    const error = {
                      message: 'Incorrect email or password'
                    }
                    res.json(error)
                }
            } else {
                const error = {
                  message: 'Email does not exist. Please sign up.'
                }
                res.json(error)
            }

        })
})


module.exports = router;
