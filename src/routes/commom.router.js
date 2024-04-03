import express from "express";
import { upload, mutiUpload } from "../middlewares/upload.js";
import {
  UploadDB,
  getImage,
  MultiUploadToDB,
} from "../controllers/CommonController.js";
var router = express.Router();

// Lấy danh sách sản phẩm
router.post("/upload", upload.single("image"), UploadDB);
router.post("/multiupload", mutiUpload.array("images"), MultiUploadToDB);
router.get("/image", getImage);

export default router;
