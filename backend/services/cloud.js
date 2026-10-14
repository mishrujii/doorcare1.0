import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";

dotenv.config();

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  timeout: 5000,
  maxRetries: 0,
  logLevel: "debug"
});

async function imageKit(image) {
  let response
  try{
      response = await client.files.upload({
      file: image.buffer,
      fileName: image.originalname
    });
  }
  catch (error){
    response = { url: "https://unsplash.com/photos/a-cartoon-character-wearing-a-blue-shirt-and-a-blue-hat-gEf9bOMTZtk"}
  }
  return response;
}

export default imageKit;
