import multer from "multer"
import dotenv from 'dotenv';
dotenv.config()
import { CloudinaryStorage } from "multer-storage-cloudinary"
import cloudinary from "./cloudinary.js"

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "vendra-images",
        allowed_formats: ["jpg", "png", "jpeg", "webp"],

        // transformation: [
        //     { width: 1200, crop: "scale" },
        //     { quality: "80" }
        // ],

        // format: "webp"
    }
})


const upload = multer({ storage: storage })

export default upload