const cors = require("cors");
const express = require("express");
const usersRouter = require("./routers/users.routes")
const authRouter = require("./routers/auth.routes")
const postsRouter = require("./routers/posts.routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", usersRouter)
app.use("/auth", authRouter)
app.use("/post", postsRouter)

app.get("/", (req, res) => {
  res.json({
    message: "Desafío Backend APIv1",
  });
});

module.exports = app;