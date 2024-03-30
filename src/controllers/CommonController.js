import Upload from "../models/upload.model.js";

export function UploadDB(req, res) {
  const data = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ message: "Thiếu dữ liệu" });
  }

  Upload.create(data)
    .then((resData) => res.status(201).json(resData))
    .catch((err) => res.status(500).json({ message: err.message }));
}
