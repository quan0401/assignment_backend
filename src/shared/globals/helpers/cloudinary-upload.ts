import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { config } from '~/config';

export const uploads = (
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        folder: config.FOLDER,
        transformation: [
          { width: 1000, height: 1000, crop: 'limit' }, // Resize image to fit within 1000x1000 pixels
          { quality: 'auto:good' } // Automatically adjust quality to achieve the best compression while maintaining visual quality
        ]
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
};

export const uploadsVideo = (
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> =>
  new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        resource_type: 'video',
        chunk_size: 50000, // if file size is greater than 50mb, it will upload 50mb at a time
        public_id,
        overwrite,
        invalidate,
        folder: config.FOLDER
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
