const User = require('../models/user.model');

/**
 * Create a user
 * @param {Object} user
 * @returns {Promise<User>}
 */
const create = async (user) => {
  return User.create(user);
};

/**
 * Find all user
 * @returns {Promise<User[]>}
 */
const findAll = async () => {
  return await User.find().exec();
};

/**
 * Find a user by id
 * @param {Object} id
 * @returns {Promise<User>}
 */
const findOne = async (id) => {
  return await User.findOne({ _id: id }).exec();
};

/**
 * Update a user by id
 * @param {Object} id
 * @returns {Promise<User>}
 */
const update = async (id, user) => {
  return await User.findOneAndUpdate({ _id: id }, user, { new: true });
};

/**
 * Remove a user by id
 * @param {Object} id
 * @returns {Promise<User>}
 */
const remove = async (id) => {
  return await User.findOneAndDelete({ _id: id });
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
