var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.get('/:id', function(req, res, next) {
    knex('user_moods')
        .where('users_id', req.params.id)
        .then(function(moods) {
            res.json(moods)
        })
})

router.post('/', function(req, res, next) {
    knex('user_moods')
        .insert(req.body)
        .then(function() {
          res.json('mood successfully submitted')
        })
})

module.exports = router;
