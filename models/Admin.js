const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/backend_group");
const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfull connection to MongoDB!!!");
});

const AdminSchema = mongoose.Schema({
    username:{type:String}
})
AdminSchema.plugin(passportLocalMongoose)

AdminModel = mongoose.model("Admin",AdminSchema);
AdminModel.find({}).then(data => {
    if(data.length === 0){
        AdminModel.register({username:"admin_user"},"admin_password",(err,success) => {
            if(err){
                console.log("Error registering admin",err.message);
            } else{
                console.log("Admin created");
            }
        });
}}).catch(error => console.log("Error querying for admin",error.message));
module.exports = AdminModel