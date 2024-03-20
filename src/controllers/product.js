import { productValid } from "../../validation/product.js";
import Product from "../models/product.js";

export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({
        message: "khong tim thay ",
      });
    }
    return res.status(200).json({
      message: "lay danh sach  thanh cong",
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
        message: "khong tim thay ",
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
        message: "cap nhat  khong thanh cong",
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
