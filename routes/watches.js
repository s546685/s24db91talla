var express = require('express');
var passport = require('passport');
const watches_controlers= require('../controllers/watches');
var router = express.Router();
/* GET costumes */
router.get('/', watches_controlers.watches_view_all_Page );
/* GET detail costume page */
router.get('/detail', watches_controlers.watches_view_one_Page);
/* GET create costume page */

//module.exports = router;
//router.put('/watches/:id', watches_controllers.watches_update_put);
/* GET create update page */
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.get('/create',secured, watches_controlers.watches_create_Page);
router.get('/update',secured, watches_controlers.watches_update_Page);
router.get('/delete', watches_controlers.watches_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
module.exports = router;
/* GET delete costume page */

