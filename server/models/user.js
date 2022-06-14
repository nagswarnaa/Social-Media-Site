const mongoose = require("mongoose")


const newuserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    followers: [String],
    following: [String]
})

const newUser = mongoose.model("newUser", newuserSchema)



async function getUserName(username) {
    return await newUser.findOne({ "username": username })
}

async function deleteUser(id) {
    await newUser.deleteOne({ "_id": id })
}

async function register(username, password) {
    const user = await getUserName(username)
    if (user) throw Error('User already exists')

    const neuser = await newUser.create({
        username: username,
        password: password
    })
    return neuser
}

async function updatePassword(id, password) {
    const user = await newUser.updateOne({ "_id": id }, { $set: { password: password } })
    return user;
}

async function login(username, password) {
    const user = await getUserName(username)
    if (!user) throw Error('User not exists')
    if (user.password != password) throw Error('wrong password')
    return user
}

module.exports = {
    login, updatePassword, register, deleteUser
}