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
        res.status(error.status || 500)
        res.json({
            succes: false,
            error: error.message,
    });
}
});

route.get("/", async (req, res) => {
    try {
        const search = req.query.search;
            if (!search) {
            const posts = await postsUseCase.getAll();
            res.json({
                succes: true,
                message: "All Posts",
                data: { posts },
            });
            } else {
                const posts = await postsUseCase.getByTitle(search);
                res.json({
                    succes: true,
                    message: "All posts finded with " + search,
                    data: { posts },
                });
            }
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            succes: false,
            error: error.message,
        });
    }
});

route.patch("/:id", auth, async (req, res) => {
    try {
        const { id } = req.params
        const postUpdate = await postsUseCase.updateById(id, req.body)
        res.json({
            succes: true,
            data: { post: postUpdate },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            succes: false,
            error: error.message,
        });
    }
});

route.delete("/:id", auth, async (req, res) => {
    try {
        const payload = jwt.verify(req.headers.authorization);
        const idUserActive = await payload.id;
        const { id } = req.params;
        const post = await postsUseCase.getById(id);
        const idUserPost = post.user;
        const postDeleted = await postsUseCase.deleteById(
            id,
            idUserPost,
            idUserActive
            );
        res.json({
        succes: true,
        data: { post: postDeleted },
        });
    } catch (error) {
        res.status(error.status || 500)
            res.json({
                succes: false,
                error: error.message,
            })
    }
})
module.exports = route