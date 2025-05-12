const express = require('express');
const router = express.Router();
const reelController = require('../controllers/reelController');

// Example: /api/reels
router.get('/', reelController.getAll);
router.post('/', reelController.create);
router.delete('/:id', reelController.delete);

module.exports = router;
