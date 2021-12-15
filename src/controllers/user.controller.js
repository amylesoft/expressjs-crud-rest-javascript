const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { userService } = require('../services');

const create = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send(await userService.create(req.body));
});

const findAll = catchAsync(async (req, res) => {
  res.send(await userService.findAll());
});

const findOne = catchAsync(async (req, res) => {
  const user = await userService.findOne(req.params.userId)
  if (!user)
    res.status(httpStatus.NOT_FOUND).send()
  else
    res.send(user);
});

const update = catchAsync(async (req, res) => {
  const user = await userService.update(req.params.userId, req.body)
  if (!user)
    res.status(httpStatus.NOT_FOUND).send()
  else
    res.send(user);
});

const remove = catchAsync(async (req, res) => {
  const user = await userService.remove(req.params.userId)
  if (!user)
    res.status(httpStatus.NOT_FOUND).send()
  else
    res.send(user);
});

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
