const express = require('express');
const passport = require('passport');

const PublicationsService = require('../services/publication.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createPublicationSchema, updatePublicationSchema, getPublicationSchema } = require('../schemas/publication.schema');
const { checkRoles } = require('../middlewares/auth.handler');

const router = express.Router();
const service = new PublicationsService();

//End-point 6.
router.get('/', 
    passport.authenticate('jwt', { session: false }),
    checkRoles('alto','medio','alto medio'),
    async (req, res, next) => {
    try {
        const publicactions = await service.find();
        res.json(publicactions);
    } catch (error) {
        next(error);
    }
});

//End-point 3
router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('alto'),
  validatorHandler(createPublicationSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPublication = await service.create(body);
      res.status(201).json(newPublication);
    } catch (error) {
      next(error);
    }
  }
);

//End-point 4.
router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('alto','alto medio'),
  validatorHandler(getPublicationSchema, 'params'),
  validatorHandler(updatePublicationSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const publication = await service.update(id, body);
      res.json(publication);
    } catch (error) {
      next(error);
    }
  }
);

//End-point 5.
router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('alto'),
  validatorHandler(getPublicationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;