const { User } = require('../models');

const userData = [
  {
    username: "Viri",
    email: "viri@gmail.com",
    password: "password1234"
  },
  {
    username: "Adrian",
    email: "Adrian@gmail.com",
    password: "password1234"
  },
  {
    username: "Patricia",
    email: "patricia@gmail.com",
    password: "password1234"
  },
  {
    username: "Carlos",
    email: "carlos@gmail.com",
    password: "password1234"
  },
  {
    username: "Lola",
    email: "Lola@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;