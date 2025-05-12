const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.get("/", contactController.getInfo);
router.put("/", contactController.updateInfo); // Add auth middleware if needed

module.exports = router;
