import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadToCloudinary(image) {
  const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "doorcare" },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        );

        Readable.from(image.buffer).pipe(stream);
    });
    return result;
}

export default uploadToCloudinary;