const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")


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
    const salt = await bcrypt.genSalt(10)

    const hashed = await bcrypt.hash(password, salt)
    const neuser = await newUser.create({
        username: username,
        password: hashed
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
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw Error('wrong password')
    return user
}

module.exports = {
    login, updatePassword, register, deleteUser
}