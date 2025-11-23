import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt, { hash } from "bcrypt";
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Route for user lgoin
const loginUser = async (req,res) => {

        try {
            
            const {email, password} = req.body;
            
            const user = await userModel.findOne({email});

            if (!user) {
                return res.json({success: false, message: 'user does not exist'});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                
                const token = createToken(user._id);
                 res.cookie("token", token, {
                    httpOnly: true,
                    secure: false,           // change to true ONLY if using HTTPS
                    sameSite: "lax",         // "none" if frontend & backend are different domains
                    maxAge: 7 * 24 * 60 * 60 * 1000
                });
                res.json({success: true, message: "Login succesfully",token})

            }else{
                res.json({success: false, message: "Invalid credentials"})
            }

        } catch (error) {
            console.log(error);
            res.json({success: false, message: error.message})
        }

}

// Route for user register

const registerUser = async (req,res) => {
    try {
        const {name, email, password, confirmPassword} = req.body;
        // checking user already exist or not


        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success: false, message: "user already exists"})
        }

        // validating email format and string password

        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"})
        }
        
        if (password.length < 8) {
            return res.json({success: false, message: "Please enter a strong password"})
        }

        // if (password !== confirmPassword) {
        //     return res.json({success: false, message: "password doesnt match please re enter"})
        // }

        // hashing user password
         
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        })

            const user = await newUser.save();

            const token = createToken(user._id)
           res.cookie("token", token, {
            httpOnly: true,
            secure: false,           // change to true ONLY if using HTTPS
            sameSite: "lax",         // "none" if frontend & backend are different domains
            maxAge: 7 * 24 * 60 * 60 * 1000
});


            res.json({success: true, message: "Login success",token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// Route for admin login

const adminLogin = async (req,res) => {

    try {
        
        const{ email, password} = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success: true, token})
        }else{
            res.json({success: false, message: "invaild credencial"})
        }

    } catch (error) {
         console.log(error);
        res.json({success: false, message: error.message})
    }

}

export {loginUser, registerUser, adminLogin}