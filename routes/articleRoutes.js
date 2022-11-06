const express = require("express");
const articleController = require("../controller/article");
const articleRoutes = express.Router()

articleRoutes.get("/", articleController.getArticles);
articleRoutes.post("/", articleController.createArticle)
articleRoutes.get("/:id", articleController.getArticleDetails)
articleRoutes.delete("/:id", articleController.deleteArticle)

module.exports = articleRoutes;
