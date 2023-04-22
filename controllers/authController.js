const Admin = require("../models/Admin");
const passport = require("passport")



module.exports = {
    authenticate: passport.authenticate("local",{failureRedirect:"/login",failureFlash:"Failed to login",successRedirect:"/blog",successFlash:"Succesfully logged in as admin"}),
    logout: (req, res, next) => {
        req.logout(() => {
            req.flash("success", "You have been logged out!");
            res.locals.redirect = "/";
            next();
        });
    }
}