const express = require("express");
const usersUseCase = require("../usecases/users.usecase");

const route = express.Router();

}route.post("/", async (req, res) => {
    try {
        const user = await usersUseCase.create(req.body);
        res.json({
        succes: true,
        data: { user: user },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
        succes: false,
        error: error.message,
      });
    }
  });