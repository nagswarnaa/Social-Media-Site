const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    posttype: String,
    postcontent: { type: String, required: true, unique: true },
    createdby: {
        type: String,
        required: true,
        ref: 'newUser'
    }
})

const newPost = mongoose.model("newPost", postSchema)


async function getPostContent(postId) {
    return await newPost.findOne({ "_id": postId })
}

async function getAllPosts(createdby) {
    return await newPost.find({ "createdby": createdby })
}

async function deletePost(postId) {
    await newPost.deleteOne({ "_id": postId });
}

async function createPost(posttype, postcontent, createdby) {
    const newUserPost = await newPost.create({
        posttype: posttype,
        postcontent: postcontent,
        createdby: createdby
    })
    return newUserPost
}

async function updatePost(postId, postcontent) {
    const updatedPost = await newPost.updateOne({ "_id": postId }, { $set: { postcontent: postcontent } })
    return updatedPost;
}



module.exports = {
    getPostContent, updatePost, createPost, deletePost, getAllPosts
}