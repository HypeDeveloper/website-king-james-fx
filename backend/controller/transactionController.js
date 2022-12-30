const Trans = require("../model/transcationModel");
const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");


const getAllTransfaresAdmin = asyncHandler(async (req, res) => {
    console.log(req.user.id);
    const trans = await Trans.find();

    res.status(200).json(trans);
});


const getAllTransfaresUser = asyncHandler(async (req, res) => {
    const trans = await Trans.find({user: req.user.id});

    res.status(200).json(trans);
});


const createTransfare = asyncHandler(async (req, res) => {
    const {transType, status} = req.body
    if (transType === "" || status === "") {
        res.status(400);
        throw new Error("trans data is not complete");
    }

    const trans = await Trans.create({
        user: req.user.id,
        transType: transType,
        status: 'pending',
    });
    if (trans) {
        res.status(200).json(trans);
    } else {
        res.status(400);
        throw new Error("trans data is not valid");
    };
});

const updateTransfareOrder = asyncHandler(async (req, res) => {
    const { orderId, price } = req.body
    const order = await Trans.findById(orderId);
    const user = await User.findById(order.user);

    if (!user || !order) {
        res.status(400);
        throw new Error("User or Order not found");
    }

    await Trans.findByIdAndUpdate(orderId, {status: 'Trasction Complete'});
    await User.findByIdAndUpdate(order.user, {
        amount: price,
    });
    
    const getorder = await Trans.findById(orderId);
    const getuser = await User.findById(order.user);

    res.status(200).json({
        updateOrder: getorder,
        updateUser: getuser,
    });
})
    
module.exports = {
    createTransfare,
    getAllTransfaresAdmin,
    getAllTransfaresUser,
    updateTransfareOrder,
};