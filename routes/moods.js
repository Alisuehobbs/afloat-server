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

module.exports = router;
