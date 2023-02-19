const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(2);
const lastName = Joi.string().min(2);
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  lastName: lastName.required(),
  password: password.required(),
  role: role.required()
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }