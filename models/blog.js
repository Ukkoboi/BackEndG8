"use strict";

const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Blog", blogSchema);