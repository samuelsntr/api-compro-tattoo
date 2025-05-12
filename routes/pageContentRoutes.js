const express = require('express');
const router = express.Router();
const controller = require('../controllers/pageContentController');
// const authMiddleware = require('../middleware/authMiddleware');

// router.use(authMiddleware);
const upload = require("../middleware/upload");


router.get('/', controller.getAll);
router.post('/', upload.single("image"), controller.updateContent);

module.exports = router;
