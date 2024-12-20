const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  return bcrypt.hash(password, 10); // Directly returns a promise with bcrypt's hash method
};

const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports = {
  hashPassword,
  comparePassword
};
