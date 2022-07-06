const express = require("express")
const feedPost = require('../models/post')
const router = express.Router()


router
    .get('/getpost', async (req, res) => {
        try {
            const newpost = await feedPost.getPostContent(req.body.postId)
            res.send({ ...newpost })
        }
        catch (error) {
            res.status(401).send({ message: error.message })
        }
    })

    .post('/create', async (req, res) => {
        try {
            const newpost = await feedPost.createPost(req.body.posttype, req.body.postcontent, req.body.createdby)
            res.send({ ...newpost })
        }
        catch (error) {
            res.status(401).send({ message: error.message })
        }
    })

    .put('/updatepost', async (req, res) => {
        try {
            const newpost = await feedPost.updatePost(req.body.postId, req.body.postcontent)
            res.send({ ...newpost })
        }
        catch (error) {
            res.status(401).send({ message: error.message })
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await feedPost.deletePost(req.body.postId)
            res.send({ success: "Post deleted" })
        }
        catch (error) {
            res.status(401).send({ message: error.message })
        }
    })

module.exports = router

