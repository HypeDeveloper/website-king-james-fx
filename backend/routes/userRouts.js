const express = require('express')
const router = express.Router()
const {
    getUserData,
    registerUser,
    loginUser,
    getAllUsers,
} = require("../controller/userController");
const { protect, protectAdmin } = require("../middleware/authMiddleware");

// /users
router.post("/", registerUser);
// /users/login
router.post("/login", loginUser);
// /users/me
router.get("/me",protect, getUserData)

//   /users/admin/users
router.get("/admin/users", protectAdmin, getAllUsers);



module.exports = router