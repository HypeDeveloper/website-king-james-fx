const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../model/userModel')
const randomstring = require("randomstring");
const asyncHandler = require('express-async-handler');

// get User Data 
// [route: GET /user/me] 
// [@private]
// Get Updated user data
const getUserData = asyncHandler(async (req, res) => {
    const { _id, email, fullname, amount } = await User.findById(req.user.id);
    
    res.status(200).json({
        id: _id,
        email,
        fullname,
        amount,
    });
})

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    
    res.status(200).json({
        users
    });
})


// register User 
// [route: POST /user] 
// [@public]
const registerUser = asyncHandler(async (req, res) => {
    const {
        fullname,
        username,
        email,
        password,
        country,
        inviteRefCode,
    } = req.body;

    if (!fullname || !username || !email || !password || !country) {
        res.status(400);
        throw new Error("Fill in all fields");
    }
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already Exists')
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate User RefCode
    const refRand = randomstring.generate({
        length: 8,
        charset: "alphanumeric ",
    });
    const genUserRefCode = `${username}-${refRand}`;

    // verify Invite Token
    const inviteCode = await User.findOne({ inviteRefCode });

    if (!inviteCode) {
        res.status(400);
        throw new Error("Invalid Token");
    }


    const user = await User.create({
        fullname,
        username,
        email,
        password: hashedPassword,
        country,
        ethAddress: `eth-${username}`,
        btcAddress: `btc-${username}`,
        usdtAddress: `null-${username}`,
        userRefCode: genUserRefCode,
        inviteRefCode,
        amount: 0,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateJWT(user._id),
            fullName: user.fullname
        });
    } else {
        res.status(400);
        throw new Error("user data is not valid");
    }
});


// Authenticate User 
// [route: Post /user/login] 
// [@public]
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    
    const user = await User.findOne({email})

    // Check user email
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateJWT(user._id),
            fullName: user.fullname
        });
    } else {
        res.status(400);
        throw new Error("Invalid email or password");
    }
});


const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.AUTH_JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    getUserData,
    registerUser,
    loginUser,
    getAllUsers,
};