var express = require('express');
const watches_controlers= require('../controllers/watches');
var router = express.Router();
/* GET costumes */
router.get('/', watches_controlers.watches_view_all_Page );
/* GET detail costume page */
router.get('/detail', watches_controlers.watches_view_one_Page);
/* GET create costume page */
router.get('/create', watches_controlers.watches_create_Page);
//module.exports = router;
//router.put('/watches/:id', watches_controllers.watches_update_put);
/* GET create update page */
router.get('/update', watches_controlers.watches_update_Page);
router.get('/delete', watches_controlers.watches_delete_Page);
module.exports = router;
/* GET delete costume page */

