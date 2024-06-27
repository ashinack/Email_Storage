const express = require("express");
const router = express.Router();
const email = require("../controllers/email.controller");

router.post("/add", email.addEmail);
router.post("/getEmailList", email.getEmailList);

module.exports = router;
