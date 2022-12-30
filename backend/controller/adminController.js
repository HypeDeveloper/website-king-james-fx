const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const Admin = require("../model/adminModel");
const asyncHandler = require("express-async-handler");



const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    
    res.status(200).json({
        allUsers: users
    })
})

const createToken = asyncHandler(async (req, res) => {
    const {owner,token, rights} = req.body

    if (!token || !owner || !rights) {
        res.status(400)
         throw new Error("Fill in all fields");
    }
     
    const adminExists = await Admin.findOne({ owner });
    if (adminExists) {
        res.status(400);
        throw new Error("Admin already Exiis");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedtoken = await bcrypt.hash(token, salt);

    const admin = await Admin.create({
        owner,
        token: hashedtoken,
        rights,
    })


    if (admin) {
        res.status(201).json({
            adminId: admin.id,
            tokenID: generateJWT(admin.adminId),
            rights: rights
        })
    } else {
        res.status(400);
        throw new Error("admin token is not valid");
    }
})



const loginAdmin= asyncHandler(async (req, res) => {
    const { token, owner } = req.body;

    const admin = await Admin.findOne({ owner });

    // Check admin token
    if ((await bcrypt.compare(token, admin.token))) {
        res.json({
            _id: admin.id,
            tokenID: generateJWT(admin._id),
            right: admin.rights
        });
    } else {
        res.status(400);
        throw new Error("Invalid token");
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.body.id)

    if (user) {
        User.findByIdAndDelete(user._id)
        res.status(200).json({
            message: 'user deleted'
        })
    }
    else {
        res.status(400);
        throw new Error("Invalid user");
    }
})


const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.AUTH_JWT_SECRET, {
        expiresIn: "90d",
    });
};

module.exports = {
    loginAdmin,
    createToken,
    getAllUsers,
    deleteUser,
};