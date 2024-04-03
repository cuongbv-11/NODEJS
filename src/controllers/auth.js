import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { signInValidator, signUpValidator } from "../../validations/user.js";
dotenv.config();

const { SECRET_CODE } = process.env;
export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id; // Lấy id từ request params
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "Người dùng không tồn tại",
      });
    }
    user.password = undefined; // Loại bỏ trường password trước khi gửi response
    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const signUp = async (req, res) => {
  try {
    const { error } = signUpValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(400).json({
        message: "Email này đã được đăng ký, vui lòng sử dụng một email khác.",
      });
    }

    const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    user.password = undefined;

    return res.status(200).json({
      message: "Đăng ký thành công",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { error } = signInValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "email nay chua duoc dang ky, ban co muong dang ky khong?",
      });
    }
    const isMatch = await bcryptjs.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "mat khau khong dung",
      });
    }
    const accessToken = Jwt.sign({ _id: user._id }, SECRET_CODE, {
      expiresIn: "1d",
    });
    user.password = undefined;
    return res.status(200).json({
      message: " dang nhap thanh cong!",
      user,
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
