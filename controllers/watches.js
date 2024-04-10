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
// for a specific Costume.
exports.watches_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await watches.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Costume update form on PUT.
exports.watches_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await watches.findById( req.params.id)
// Do updates of properties
if(req.body.watches_brand)
toUpdate.watches_brand = req.body.watches_brand;
if(req.body.watches_type) toUpdate.watches_type = req.body.watches_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// Handle Costume delete on DELETE.
exports.watches_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await watches.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    