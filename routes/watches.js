var express = require('express');
const watches_controlers= require('../controllers/watches');
var router = express.Router();
/* GET costumes */
router.get('/', watches_controlers.watches_view_all_Page );
module.exports = router;