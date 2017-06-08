'use strict';
const express = require('express');
const router = express.Router();
const BudgetController = require('../controllers').Budgets;
const config = require('../../config/default.json');
config['knex'].connection = process.env.DATABASE_URL;
const knex = require('knex')(config['knex']);

const qryString = 'select category, budget_limit as targetlimit from categories';
const getBudgetsJoinCategory = (req, res) => {
  knex.raw(qryString)
  .then(function (result) {
    const buds = result.rows;
    res.status(201).send(buds);
  })
  .catch(function(err) { 
    console.log(err);
    res.status(500).send(err);
  });
};

router.route('/') 
  .get(getBudgetsJoinCategory);

module.exports = router;
