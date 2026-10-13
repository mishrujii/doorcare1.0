import ImageKit from '@imagekit/nodejs';
import dotenv from 'dotenv'

dotenv.config()

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

async function imageKit(image){
    const response = await client.files.upload({
      file: image,
      fileName: image.name,
    });
    console.log(response)
    return response
}


export default imageKit