const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post('/', (req, res, next) => {
  return userController.create(req, res, next);
});

router.get('/', (req, res, next) => {
  return userController.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  return userController.findById(req, res, next);
});

module.exports = router;