const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// Hae kaikki artikkelit
router.get('/', async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

// Lisää uusi artikkeli
router.post('/', async (req, res) => {
  const newArticle = new Article(req.body);
  await newArticle.save();
  res.status(201).json(newArticle);
});

module.exports = router;
