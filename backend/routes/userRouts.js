const express = require('express')
const router = express.Router()
const {
    getUserData,
    registerUser,
    loginUser,
    getAllUsers,
} = require("../controller/userController");
const { protect, protectAdmin } = require("../middleware/authMiddleware");

// checked
// /users
router.post("/users/", registerUser);
// /users/login
router.post("/users/login", loginUser);
// /users/me
router.get("/users/me",protect, getUserData)

// checked
//   /users/admin/users
router.get("/users/admin/users", protectAdmin, getAllUsers);



module.exports = router