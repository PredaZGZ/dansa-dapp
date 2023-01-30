const express = require('express');
const WeightController = require('../../controllers/Weight.controller');

const router = express.Router();

router.post('/', WeightController.create);
router.put('/:id', WeightController.update);
router.delete('/:id', WeightController.delete);
router.get('/user/:userId', WeightController.weightsByUser);

module.exports = router;
