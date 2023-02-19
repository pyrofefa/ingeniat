const express = require('express');
const UsersService = require('../services/user.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema  } = require('../schemas/user.schema');

const router = express.Router();
const service = new UsersService();

//End-point 1.
router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;