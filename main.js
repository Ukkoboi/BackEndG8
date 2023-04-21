"use strict";

const authController = require("./controllers/authController");

const express = require("express"),
    app = express(),
    Admin = require("./models/Admin"),
    connectFlash = require("connect-flash"),
    blogController = require("./controllers/blogController"),
    passport = require("passport"),
    expressSession = require("express-session"),
    cookieParser = require("cookie-parser"),
    router = express.Router(),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));
app.use(cookieParser("secret_passcode"));
app.use(expressSession({secret:"passcode",cookie:{maxAge:4000000},resave:false,saveUninitialized:false}));
app.use(connectFlash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash();
    res.locals.loggedIn = req.isAuthenticated();
    res.locals.currentUser = req.user;
    next();
});
passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/photos", homeController.showPhotos);
app.get("/aboutme", homeController.showAboutme);
app.get("/blog", homeController.showBlog); //Need to add blogController.fetchBlogPosts as first middleware
app.get("/login", homeController.showLogin);
app.post("/authenticate",authController.authenticate);
app.get("/logout",authController.logout,homeController.redirect)
app.get("/subscribe", homeController.showSubscribe);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});