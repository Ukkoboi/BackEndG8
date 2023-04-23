const Subscriber = require("../models/Subscriber");


module.exports = {
    insertSubscriber: (req, res, next) => {
        Subscriber.create({name: req.body.name, email: req.body.email})
        .then(subscriberData => {
            req.flash("success", "Thank you for joining as a subscriber!")
            res.locals.redirect = "/";
            next();
        }).catch(error => {
            console.log(`Error while joining as subscriber: ${error.message}`)
            next(error)
        })
    }
}
