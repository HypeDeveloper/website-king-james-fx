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
router.get("/transfare/", protect, getAllTransfaresUser);
router.post("/transfare/newTrans", protect, createTransfare);

router.post("/transfare/transUpdate", protectAdmin, updateTransfareOrder);


//   /transfare/admin
router.get("/transfare/admin", protectAdmin, getAllTransfaresAdmin);


module.exports = router;