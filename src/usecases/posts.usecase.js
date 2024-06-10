const createError = require("http-errors");
const Posts = require("../models/posts.models");

async function create(postData) {
  const newPost = await Posts.create(postData);
  return newPost;
}

async function getAll() {
  const allPosts = await Posts.find().populate("user");
  return allPosts;
}

async function getById(id) {
  const post = await Posts.findById(id);
  return post;
}