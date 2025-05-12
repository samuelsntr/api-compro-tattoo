const express = require('express');
const router = express.Router();
const controller = require('../controllers/serviceController');
// const authMiddleware = require('../middleware/authMiddleware');

// router.use(authMiddleware);
const upload = require("../middleware/upload");

router.get('/', controller.getAll);
router.post('/', upload.single("image"), controller.create);
router.put('/:id', upload.single("image"), controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
