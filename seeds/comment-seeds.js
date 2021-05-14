const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Who uses facebook anymore? It's for old people.",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "OOF, better sell my bitcoin quick...",
    post_id: 1,
    user_id: 5
  },
  {
    comment_text: "I don't even know how to ride a bike.",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "HAnDLeBaRs iS So EaSy.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Heck yeah, I'd love to date an AI!!!",
    post_id: 5,
    user_id: 1
  },
  {
    comment_text: "What weirdo would date an AI...O.o",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;