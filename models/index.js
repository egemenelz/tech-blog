const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: 'SET NULL', 
  onUpdate: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: 'SET NULL', 
  onUpdate: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: 'SET NULL', 
  onUpdate: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: 'SET NULL', 
  onUpdate: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: 'SET NULL', 
  onUpdate: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: 'SET NULL', 
  onUpdate: 'CASCADE'
});


module.exports = { User, Post, Comment };
