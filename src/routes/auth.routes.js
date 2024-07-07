const authUseCase = require('../usecases/auth.usecase');
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginResult = await authUseCase.logIn(email, password);

    // Suponiendo que loginResult contiene token e id
    const { token, id } = loginResult;

    res.json({
      success: true,
      message: 'Logged in',
      data: {
        token,
        id
      }
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
      message: 'Error at login',
      error: error.message
    });
  }
});

module.exports = router;
