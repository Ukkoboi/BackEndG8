"use strict";

exports.showPhotos = (req, res) => {
    res.render("photos");
};

exports.showInfo = (req, res) => {
    res.render("info");
};

exports.showBlog = (req, res) => {
  res.render("blog");
};