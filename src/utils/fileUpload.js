import {v2 as cloudinary} from "cloudinary";
import { response } from "express";
import fs from "fs";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY
})

export const uploadOnCloudinary = async (localFilePath) => {
    try{
        if (!localFilePath) return null

        // upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded to cloudinary
        console.log("File has been uploaded to cloudinary: ", response.url)
        return response;
    }
    catch (error) {
        // remove the locally saved temporary file as upload got failed
        console.error("Error while uploading file: ", error.message)
    }
    finally{
        if(localFilePath) fs.unlinkSync(localFilePath)
    }
}
