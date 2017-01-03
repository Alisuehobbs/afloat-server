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

router.post('/', function(req, res, next) {
    knex('user_activities')
        .insert(req.body)
        .then(function() {
          res.json('activity successfully submitted')
        })
})

router.put('/:id', function(req, res, next) {
    knex('user_activities')
        .where('id', req.params.id)
        .update(req.body)
        .then(function() {
          res.json('weight successfully updated')
        })
})

module.exports = router;
