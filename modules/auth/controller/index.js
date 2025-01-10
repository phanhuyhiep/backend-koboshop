import register from "./api/register.controller.js"
import login from "./api/login.controller.js"
import getAllUser from "./api/getAllUser.controller.js"
import deleteUser from "./api/deleteUser.controller.js"
import updateUser from "./api/updateUser.controller.js"
import email from "./api/email.controller.js"
import searchUser from "./api/searchUser.controller.js"
import getOneUser from "./api/getOneUser.controller.js"
const authController = {
    register,
    login,
    getAllUser,
    getOneUser,
    deleteUser,
    updateUser,
    email,
    searchUser
}

export default authController