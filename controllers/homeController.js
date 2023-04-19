"use strict";

exports.showPhotos = (req, res) => {
  res.render("photos");
};

exports.showAboutme = (req, res) => {
  res.render("Aboutme");
};

exports.showBlog = (req, res) => {
  res.render("blog");
};

exports.showLogin = (req, res) => {
  res.render("login");
};

exports.showSubscribe = (req, res) => {
  res.render("subscribe");
};