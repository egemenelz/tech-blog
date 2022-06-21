const {Comment} = require('../models');

const commentData = [
    {
        comment_text: "Awesome comment",
        user_id: "1",
        post_id: "1"
    },
    {
        comment_text: "Gorgeous comment",
        user_id: "2",
        post_id: "2"
    },
    {
        comment_text: "Beautiful comment",
        user_id: "3",
        post_id: "3"
    },
    {
        comment_text: "Amazing Lorem Ipsum comment",
        user_id: "4",
        post_id: "4"
    },
    {
        comment_text: "I don't like this comment",
        user_id: "5",
        post_id: "5"
    },
    {
        comment_text: "I love this lorem",
        user_id: "6",
        post_id: "6"
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;