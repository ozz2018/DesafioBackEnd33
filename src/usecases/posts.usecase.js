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

async function getByTitle(title) {
    //Utiliza una expresión regular ($regex) para la búsqueda,
    //con la opción i para hacerla insensible a mayúsculas.
    const query = { title: { $regex: title, $options: "i" } };
    const getByTitle = await Posts.find(query).populate("user");
    return getByTitle;
  }
  
  async function deleteById(idPost, idUserPost, idUserActive) {
    if (idUserPost != idUserActive)
      throw createError(403, "The user isn't the creator of the post");
  
    const postDeleted = await Posts.findByIdAndDelete(idPost);
    return postDeleted;
  }
  
async function updateById(id, newPostData) {
    const originalUser = await Posts.findById(id);
    newPostData.user = originalUser.user;
    newPostData.updated_at = new Date();
    const updatedPost = await Posts.findByIdAndUpdate(id, newPostData, {
      new: true,
    });
    return updatedPost;
  }
  
  module.exports = {
    create,
    getAll,
    getById,
    getByTitle,
    deleteById,
    updateById,
  };
  