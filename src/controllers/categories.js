import cartegoryValidator from "../../validations/category.js";
import Category from "../models/Category.js";

export const getAll = async (req, res) => {
  try {
    const data = await Category.find({});

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "no category",
      });
    }
    return res.status(200).json({
      message: "Category has been",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "no category",
      });
    }
    return res.status(200).json({
      message: "Category has been",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = cartegoryValidator.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: error,
      });
    }
    const data = await Category.create(req.body);

    if (!data) {
      return res.status(404).json({
        message: "creat catrgoryy not succ",
      });
    }
    return res.status(200).json({
      message: "creat catrgoryy not succ",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = cartegoryValidator.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: error,
      });
    }
    const data = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "update catrgoryy not succ",
      });
    }
    return res.status(200).json({
      message: "update catrgoryy not succ",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const data = await Category.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "delete catrgoryy not succ",
      });
    }
    return res.status(200).json({
      message: "delete catrgoryy not succ",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
