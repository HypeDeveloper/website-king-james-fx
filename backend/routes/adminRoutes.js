const express = require("express");
const router = express.Router();
const {
    loginAdmin,
    createToken,
    getAllUsers,
    deleteUser,
} = require("../controller/adminController");
const {protectAdmin} = require("../middleware/authMiddleware");

router.post("/admin/", createToken);
router.post("/admin/login", loginAdmin);

router.delete("/admin/user/delete", protectAdmin, deleteUser);

module.exports = router;
