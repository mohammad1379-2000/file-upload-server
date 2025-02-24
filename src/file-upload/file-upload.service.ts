import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FileUploadService {
  handleFileUpload(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    // allow all file types
    const allowedMimeTypes = ['*/*'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException('Invalid file type');
    }

    return { message: 'File uploaded successfully', filePath: file.path };
  }
}
