const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
