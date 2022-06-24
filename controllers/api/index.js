const router = require('express').Router();

const userRoutes = require('./users.js');
const postRoutes = require('./posts.js');
const commentsRoutes = require('./comments.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes);


module.exports = router;