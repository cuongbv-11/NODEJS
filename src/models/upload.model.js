import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true, // Đảm bảo trường image là bắt buộc
    },
  },
  { timestamps: true }
);

const Upload = mongoose.model("Upload", uploadSchema);

export default Upload;
