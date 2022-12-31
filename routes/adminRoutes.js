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


// checked
router.post("/admin/login", loginAdmin);
router.get("/admin/users/all", protectAdmin, getAllUsers);
router.delete("/admin/user/delete", protectAdmin, deleteUser);

module.exports = router;
