const mongoose = require("mongoose");
mongoose.pluralize(null);
const ItemSchemaRef = mongoose.Schema({
    _id:Number,
    iname:String,
    price:Number,
    image:String,
    company:String
});

module.exports = mongoose.model("Item",ItemSchemaRef)
;