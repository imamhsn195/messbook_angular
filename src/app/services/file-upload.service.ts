// file-upload.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor() {}

  handleFileInput(event: any): File | null {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      return fileInput.files[0];
    }
    return null;
  }

  extractFileName(file: File): string {
    return file.name;
  }
  
}
