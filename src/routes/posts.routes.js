const useCasePost = require('../usecases/posts.usecase')
const auth = require('../middlewares/auth.middleware')
const express = require('express')
const router = express.Router()

router.post('/', auth, async (req, res) => {
  try {
    const post = req.body
    const newPost = useCasePost.create(post)
    res.json({
      succes: true,
      message: 'Post created',
      data: {
        newPost
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: 'Error at create post',
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const posts = await useCasePost.getAll()
    res.json({
      success: true,
      message: 'All posts',
      data: {
        posts
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: 'Error at get all posts',
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await useCasePost.getById(id)
    res.json({
      success: true,
      message: 'Post found',
      data: {
        post
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: 'Error at get post',
      error: error.message
    })
  }
})

router.patch('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params
    const post = req.body
    const updatesPost = await useCasePost.updateById(id, post)
    res.json({
      success: true,
      message: 'Post updated',
      data: {
        updatesPost
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: 'Error at update post',
      error: error.message
    })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params
    const deletePost = await useCasePost.deleteById(id)
    res.json({
      success: true,
      message: 'Post deleted',
      data: {
        deletePost
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: 'Error at delete post',
      error: error.message
    })
  }
})

module.exports = router
