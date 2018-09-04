const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  Post.find().populate('author').populate('category').exec((err, posts) => {
    // return res.jsonp(posts)
    if (err) return next(err);
    res.render('blog/index', {
      title: 'Node Blog Home',
      posts: posts,
      pretty: true
    });
  });
});

router.get('/about', (req, res, next) => {
  Post.find((err, posts) => {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'About me',
      pretty: true
    });
  });
});

router.get('/contact', (req, res, next) => {
  Post.find((err, posts) => {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'Contact me',
      pretty: true
    });
  });
});
