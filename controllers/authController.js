import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { UnauthorizedError } from "../errors/customError.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
    console.log(req);
    
    req.body.password = await hashPassword(req.body.password);
    const user = await User.create(req.body);
    delete user.password;
    res.status(StatusCodes.CREATED).json({
        message: "Account created successfully!",
        user
    });
};

export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const isValidUser =
        user && comparePassword(req.body.password, user.password);
    if (!isValidUser)
        throw new UnauthorizedError("Email or password doesn't match!");
    const token = createJWT({ userId: user._id, email: user.email });
    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
        sameSite: 'None'
    });

    res.status(StatusCodes.OK).json({ message: 'Logged in successfully!' });
};

export const logout = async (req,res)=>{
    res.cookie('token','logout', {
        httpOnly: true,
        expires: new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({message: 'Logged out successfully'});
}