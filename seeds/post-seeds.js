const { Post } = require('../models');

const postData = [
  {
    title: 'Bitcoin, Dogecoin prices fall after Musk says Tesla is dropping Bitcoin',
    post_text: 'The Musk giveth and the Musk taketh away.',
    user_id: 1,
  },
  {
    title: 'Everyone uses computers!',
    post_text: 'When will they go extict?',
    user_id: 2,
  },
  {
    title: 'Facebook-backed Diem is moving its stablecoin project to the U.S.',
    post_text: 'According to CNBC, Diem is planning to launch a small-scale pilot of its Diem USD stablecoin sometime in 2021. ',
    user_id: 1,
  },
  {
    title: 'Tailwind the new bootstrap?',
    post_text: 'You need to ditch this old css!',
    user_id: 3,
  },
  {
    title: 'What exactly is handlebars?',
    post_text: 'The world may never know...',
    user_id: 4,
  },
  {
    title: 'New technologies in Japan',
    post_text: 'Can AIs be your REAL friends?',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;