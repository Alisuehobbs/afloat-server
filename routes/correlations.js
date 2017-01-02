var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');


router.get('/:id', function(req, res, next) {
    knex('correlations')
        .leftJoin('user_activities', 'activity_id', 'user_activities.id')
        .where('correlations.users_id', req.params.id)
        .then(function(data) {
          res.json(data)
        })
})


module.exports = router;
