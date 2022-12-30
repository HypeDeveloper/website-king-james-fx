const express = require("express");
const router = express.Router();
const {
    createTransfare,
    getAllTransfaresAdmin,
    getAllTransfaresUser,
    updateTransfareOrder
} = require("../controller/transactionController");
const { protect, protectAdmin } = require("../middleware/authMiddleware");


// /transfare
// /transfare/newTrans
// /transfare/transUpdate
router.get("/", protect, getAllTransfaresUser);
router.post("/newTrans", protect, createTransfare);
router.post("/transUpdate", protect, updateTransfareOrder);


//   /transfare/admin
router.get("/admin", protectAdmin, getAllTransfaresAdmin);


module.exports = router;