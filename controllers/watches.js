var watches = require('../models/watches');
// List of all watches
// List of all Costumes
exports.watches_list = async function (req, res) {
    try {
        thewatches = await watches.find();
        res.send(thewatches);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.watches_view_all_Page = async function (req, res) {
    try {
        thewatches = await watches.find();
        res.render('watches', { title: 'watches Search Results', results: thewatches });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific watches.
exports.watches_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: watches detail: ' + req.params.id);
};
// Handle watches create on POST.
// Handle Costume create on POST.
exports.watches_create_post = async function (req, res) {
    console.log(req.body)
    let document = new watches();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.watches_brand = req.body.watches_brand;
    document.watches_type = req.body.watches_type;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// Handle watches delete from on DELETE.
exports.watches_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: watches delete DELETE ' + req.params.id);
};
// Handle watches update form on PUT.
exports.watches_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: watches update PUT' + req.params.id);
};
