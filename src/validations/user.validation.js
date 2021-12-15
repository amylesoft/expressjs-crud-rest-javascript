const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNo: Joi.string().required().min(10).max(10),
  }),
};

const findOne = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const update = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNo: Joi.string().required().min(10).max(10),
    })
    .min(1),
};

const remove = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  create,
  findOne,
  update,
  remove,
};
