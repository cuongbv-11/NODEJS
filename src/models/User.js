import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Thêm ràng buộc duy nhất vào trường email
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "member",
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("User", UserSchema);
