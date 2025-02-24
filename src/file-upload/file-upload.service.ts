import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FileUploadService {
  handleFileUpload(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    // validate file type only .h5
    const allowedMimeTypes = ['application/x-hdf5'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException('Invalid file type');
    }

    return { message: 'File uploaded successfully', filePath: file.path };
  }
}
