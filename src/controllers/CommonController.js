import Upload from "../models/upload.model.js";
import "dotenv/config";

export function UploadDB(req, res) {
  const data = req.body;
  // upload 1 ảnh
  data.type = 1;
  // console.log(data);
  if (!data || data == {}) return res.json({ message: "Thiếu dữ liệu" });

  Upload.create(data)
    .then((resData) => res.json(resData))
    .catch((err) => res.json({ message: err }));
}

export function MultiUploadToDB(req, res) {
  const data = req.body;
  data.type = 2;
  data.images = data.filenameArr;
  // console.log(data);
  Upload.create(data)
    .then((resData) => {
      res.status(201).json(resData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

//[GET] /image
export function getImage(req, res) {
  Upload.find({ type: 1 })
    .then((resData) => {
      resData = resData.map((item) => {
        return {
          id: item._id,
          filename: process.env.URL_API + item.image,
        };
      });
      res.json(resData);
    })
    .catch((err) => {
      res.json(err);
    });
}
