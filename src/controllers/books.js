import booksValidator from "../../validations/books.js";
import Books from "../models/books.js";

export const getAll = async (req, res) => {
  try {
    const data = await Books.find({});

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "No books found",
      });
    }
    return res.status(200).json({
      message: "Books retrieved successfully",
      data: data,
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
    const data = await Books.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    return res.status(200).json({
      message: "Book retrieved successfully",
      data: data,
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
    const { error } = booksValidator.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const data = await Books.create(req.body);

    return res.status(200).json({
      message: "Book created successfully",
      data: data,
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
    const { error } = booksValidator.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const data = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!data) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    return res.status(200).json({
      message: "Book updated successfully",
      data: data,
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
    const data = await Books.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    return res.status(200).json({
      message: "Book deleted successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
