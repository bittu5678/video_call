const authentication = require("../models/authentication");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;
    return jwt.sign({_id}, jwtkey);
};

const registration = async(req, res) => {
    try {
        
        const {name, email, password} = req.body;

        let user = await authentication.findOne({email});

        if(user){
            return res.status(400).json('the user with same email address already exist');

        }
        if(!name || !email || !password){
            return res.status(400).json({message: "Fill up all the required details. Your ID is not secure unless all details are provided."});
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({message: "Please provide a valid email address."});
        }
        if(!validator.isStrongPassword(password)){
            return res.status(400).json({message: "Choose a stronger password. Your choices for a password are too weak."});
        }

        user = new authentication({name, email, password});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const token = createToken(user._id);

        res.status(200).json({_id: user._id, name, email, token});
    } catch (error) {
       console.error(error);
       res.status(500).json({message: "Internal Server Error"}); 
    }
}

const login = async(req, res)=>{
    const {email, password} = req.body;

    try {
        
        let user = await authentication.findOne({email});

        if(!user) return res.status(400).json('Inavalid Email or password');

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) return res.status(400).json('Invalid Password...');

        const token = createToken(user._id);
        res.status(200).json({_id: user._id, name : user.name, email, token});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const findUser = async(req, res) =>{
    const userId = req.params.userId;
    try {
        const user = await authentication.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
module.exports = {registration, login, findUser};