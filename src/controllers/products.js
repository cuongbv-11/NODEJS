import Product from "../models/Product.js";
import { productValid } from "../../validations/product.js";
import Category from "../models/Category.js";

export const getAll = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const filters = {};

    const products = await Product.find(filters).skip(skip).limit(limit);
    if (products.length === 0) {
      return res.status(404).json({
        message: "khong tim thay",
      });
    }
    return res.status(200).json({
      message: "lay danh sach thanh cong",
      datas: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const search = async (req, res) => {
  try {
    const query = req.query.q;
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });

    if (products.length === 0) {
      return res.status(404).json({
        message: "khong tim thay",
      });
    }

    return res.status(200).json({
      message: "tim kiem thanh cong",
      datas: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "khong tim thay",
      });
    }
    return res.status(200).json({
      message: "lay danh sach thanh cong",
      datas: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = productValid.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const product = await Product.create(req.body);
    if (!product) {
      return res.status(404).json({
        message: "tao khong thanh cong",
      });
    }
    const updateCategory = await Category.findByIdAndUpdate(data.categoryId, {
      $addToSet: {
        products: data._id,
      },
    });
    if (updateCategory) {
      return res.status(404).json({
        message: "tao khong thanh cong",
      });
    }
    return res.status(200).json({
      message: "tao thanh cong",
      datas: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = productValid.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "cap nhat khong thanh cong",
      });
    }
    return res.status(200).json({
      message: "cap nhat thanh cong",
      datas: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "xoa  khoong thanh cong",
      });
    }
    return res.status(200).json({
      message: "xoa thanh cong",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
