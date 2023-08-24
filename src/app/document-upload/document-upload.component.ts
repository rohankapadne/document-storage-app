import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
})
export class DocumentUploadComponent {
  constructor(private authService: AuthService) {}

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }
  selectedFile: File | null = null;
  acceptedFileTypes = ['.pdf', '.docx']; //Demo Types
  maxFileSize = 5 * 1024 * 1024; // 5 MB Max Limit
  validationError: string | null = null;
  onFileChange(event: any): void {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      this.selectedFile = null;
      return;
    }

    if (!this.isFileOfTypeAccepted(selectedFile)) {
      alert('Invalid file type. Please select a valid file type.');
      this.selectedFile = null;
      return;
    }

    if (selectedFile.size > this.maxFileSize) {
      alert(
        'File size exceeds the maximum limit. Please select a smaller file.'
      );
      this.selectedFile = null;
      return;
    }

    this.selectedFile = selectedFile;
  }

  private isFileOfTypeAccepted(file: File): boolean {
    const fileType = `.${file.name.split('.').pop()}`.toLowerCase();
    return this.acceptedFileTypes.includes(fileType);
  }
  uploadDocument(event: Event): void {
    event.preventDefault();

    if (this.selectedFile) {
      console.log('Uploading file:', this.selectedFile.name);
      this.selectedFile = null;
    }
  }
}
