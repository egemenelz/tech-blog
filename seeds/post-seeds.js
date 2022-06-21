const {Post} = require('../models');

const postData = [
    {
        title: "Lorem Ipsum",
        post_url: "www.lorem.ipsum.com",
        user_id: "1"
    },
    {
        title: "lorem Ipsum and friends",
        post_url: "www.lorem.ipsum.com/friends",
        user_id: "2"
    },
    {
        title: "Lorem Ipsum and friends and friends",
        post_url: "www.lorem.ipsum.com/friends/friends",
        user_id: "3"
    },
    {
        title: "Lorem Ipsum and friends and awesome friends",
        post_url: "www.lorem.ipsum.com/friends/awesome",
        user_id: "4"
    },
    {
        title: "Awesome friends and friends",   
        post_url: "www.awesome.com/friends",
        user_id: "5"
    },
    {
        title: "Testing friends and friends",
        post_url: "www.testing.com/friends",
        user_id: "6"
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;