const mongoose = require("mongoose");

const subscriberSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String}
});

module.exports = mongoose.model("Subscriber", subscriberSchema);