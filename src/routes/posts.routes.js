const express = require("express");
const postsUseCase = require("../usecases/posts.usecase");
const auth = require("../middlewares/auth.middleware");
const jwt = require("../lib/jwt");


const route = express.Router();

route.post("/", auth, async (req, res) => {
  try {
    req.body.user = req.user.id;
    const posts = await postsUseCase.create(req.body);

    res.json({
      succes: true,
      data: { post: posts },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      succes: false,
      error: error.message,
    });
  }
});