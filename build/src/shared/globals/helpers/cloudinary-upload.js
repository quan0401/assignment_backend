"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadsVideo = exports.uploads = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const config_1 = require("../../../config");
const uploads = (file, public_id, overwrite, invalidate) => {
    return new Promise((resolve, reject) => {
        cloudinary_1.default.v2.uploader.upload(file, {
            public_id,
            overwrite,
            invalidate,
            folder: config_1.config.FOLDER,
            transformation: [
                { width: 1000, height: 1000, crop: 'limit' },
                { quality: 'auto:good' } // Automatically adjust quality to achieve the best compression while maintaining visual quality
            ]
        }, (error, result) => {
            if (error)
                resolve(error);
            resolve(result);
        });
    });
};
exports.uploads = uploads;
const uploadsVideo = (file, public_id, overwrite, invalidate) => new Promise((resolve, reject) => {
    cloudinary_1.default.v2.uploader.upload(file, {
        resource_type: 'video',
        chunk_size: 50000,
        public_id,
        overwrite,
        invalidate,
        folder: config_1.config.FOLDER
    }, (error, result) => {
        if (error)
            resolve(error);
        resolve(result);
    });
});
exports.uploadsVideo = uploadsVideo;
//# sourceMappingURL=cloudinary-upload.js.map