"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImageInCloudinary = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const deleteImageInCloudinary = (publicId, resource_type = 'image') => {
    return new Promise((resolve, reject) => {
        // Delete the image
        // cloudinary.v2.uploader.destroy(publicId, , (error, result) => {
        //   if (error) resolve(error);
        //   else resolve(result);
        // });
        cloudinary_1.default.v2.uploader.destroy(publicId, {
            resource_type
        }, (error, result) => {
            if (error)
                resolve(error);
            else
                resolve(result);
        });
    });
};
exports.deleteImageInCloudinary = deleteImageInCloudinary;
//# sourceMappingURL=cloudinary-delete.js.map