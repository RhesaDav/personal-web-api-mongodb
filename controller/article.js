const Article = require("../models/Article");

class articleController {
  static getArticles = (req, res) => {
    Article.find().then((data) => {
      if (data.length > 0) {
        res.status(200).send({
          message: "total :" + data.length,
          article: data,
        });
      } else {
        res.status(404).send({
          message: "Not yet create article",
        });
      }
    });
  };

  static createArticle = (req, res) => {
    const article = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    try {
      article.save((err, article) => {
        if (article) {
          res.status(200).send({
            message: "article created",
            data: article,
          });
        } else {
          res.status(404).send({
            message: "failed to created",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  static getArticleDetails = async (req,res) => {
    const id = req.params.id
    try {
        const article = await Article.findById(id)
    if (article) {
        res.send({
            message: 'article found',
            data: article
        })    
    } else {
        res.send({
            message: 'no article here'
        })
    }
    } catch (error) {
     console.log(error)   
    }
  }

  static deleteArticle = async (req,res) => {
    const id = req.params.id
    const article = await Article.findByIdAndDelete(id)
    res.send({
        message: 'article deleted',
        data:article
    })
  }
}

module.exports = articleController;
