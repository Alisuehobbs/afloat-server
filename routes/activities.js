var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.get('/:id', function(req, res, next) {
    knex('user_activities')
        .where('users_id', req.params.id)
        .then(function(activities) {
            res.json(activities)
        })
})

// router.post('/', function(req, res, next) {
//     console.log('made it to the right route');
//     knex('user_activities')
//         .insert(req.body)
//         .then(function() {
//           res.json('mood successfully submitted')
//         })
// })

module.exports = router;
