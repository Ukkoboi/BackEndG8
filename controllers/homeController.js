"use strict";

exports.showPhotos = (req, res) => {
  res.render("photos");
};

exports.showAboutme = (req, res) => {
  res.render("aboutme");
};

exports.showBlog = (req, res) => {
  const blogData = res.locals.blogData;
  console.log(blogData);
  res.render("blog", blogData); 
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