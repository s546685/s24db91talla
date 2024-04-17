const mongoose = require("mongoose")
const watchesSchema = mongoose.Schema({
watches_brand: String,
watches_type: {
    type: String,
    minlength:1,
    maxlength: 14,
},
cost: {
    type: Number,
    min: 1,
    max :2000,
}
})
module.exports = mongoose.model("watches",
watchesSchema)