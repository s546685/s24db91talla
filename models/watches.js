const mongoose = require("mongoose")
const watchesSchema = mongoose.Schema({
watches_brand: String,
watches_type: String,
cost: Number
})
module.exports = mongoose.model("watches",
watchesSchema)