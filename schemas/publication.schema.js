const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string();
const description = Joi.string();
const userId = Joi.number().integer();


const createPublicationSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  userId: userId.required()
});

const updatePublicationSchema = Joi.object({
  title: title,
  description: description,
  userId: userId
});

const getPublicationSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPublicationSchema, updatePublicationSchema, getPublicationSchema }