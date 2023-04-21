"use strict";

exports.showPhotos = (req, res) => {
  res.render("photos");
};

exports.showAboutme = (req, res) => {
  res.render("Aboutme");
};

exports.showBlog = (req, res) => {
  //const blogData = res.locals.blogData
  res.render("blog"); //Use contents of blogData with this template
};

exports.showLogin = (req, res) => {
  res.render("login");
};

exports.showSubscribe = (req, res) => {
  res.render("subscribe");
};

exports.redirect = (req,res) => {
  res.redirect(res.locals.redirect);
}