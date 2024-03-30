import multer from "multer";
import path from "path";

// Cấu hình lưu trữ và tên tệp
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // Xác định thư mục đích
    callback(null, "src/uploads");
  },
  filename: (req, file, callback) => {
    // Xác định tên tệp
    const filename = Date.now() + path.extname(file.originalname);
    req.body.image = filename; // Gắn tên tệp vào req.body.image
    callback(null, filename);
  },
});

// Export middleware multer đã cấu hình
export const upload = multer({ storage: storage });
