var express = require('express');
var router = express.Router();
const historys = require('../controllers/history');

// Rute untuk menyimpan data ke model history
router.get("/", historys.index);
router.post("/insert", historys.insert);

module.exports = router;
