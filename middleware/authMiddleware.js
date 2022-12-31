const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");
const Users = require("../model/userModel");
const Admin = require("../model/adminModel");


const protect = asyncHandler(async (req, res ,next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // jet Token from header
            token = req.headers.authorization.split(' ')[1]


            // Verify Token
            const decoded = jwt.verify(token, process.env.AUTH_JWT_SECRET);

            // Get The Verified user
            req.user = await Users.findById(decoded.id).select('-password');

            next()
        } catch (err) {
            console.log(err);
            res.status(401)
            throw new Error('User not authorized')
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("User no token");
    }
})

const protectAdmin = asyncHandler(async (req, res ,next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // jet Token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify Token
            const decoded = jwt.verify(token, process.env.AUTH_JWT_SECRET);

            // Get The Verified user
            req.user = await Admin.findById(decoded.id)

            next()
        } catch (err) {
            console.log(err);
            res.status(401)
            throw new Error('User not authorized')
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Admin no token");
    }
})

module.exports = {protect, protectAdmin}