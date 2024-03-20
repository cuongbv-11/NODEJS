import mongoose, { model } from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      minLength: [5, "can nhieu hon 5 ki tu"],
      maxLength: [30, "can it hon 30 ki tu"],
      unique: true,
      required: [true, "khong duoc de trong"],
    },
    age: {
      type: Number,
      min: [0, " tuoi phai lon hon 0"],
      max: [100, " tuoi phai nho hon 100"],
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("Product", productSchema);
