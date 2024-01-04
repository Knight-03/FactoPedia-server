const express = require('express');
const factController = require('../controllers/factControllers')

const router = express.Router();

router.route('/').get(factController.getAllFacts).post(factController.createFact);
// console.log(router);

router.route('/:id').put(factController.updateEmojis)


module.exports = router;