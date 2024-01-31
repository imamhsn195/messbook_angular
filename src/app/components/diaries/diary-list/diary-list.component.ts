import { Component } from '@angular/core';
import { DiaryService } from '../diary.service';
import { Diary } from '../diary.model';
import { FileUploadService } from '../../../services/file-upload.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { DeleteConfirmationService } from '../../../services/delete-confirmation.service';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrl: './diary-list.component.css'
})
export class DiaryListComponent {

  constructor(
    private messBookService: DiaryService,
    private snackbarService: SnackbarService,
    private deleteConfirmationService: DeleteConfirmationService,
    private fileUploadService: FileUploadService
    ){}

  tableColumnHeaders: string[] = [ "serialNumber" , "id", "title", 'startDate', 'endDate', 'createdBy', 'status', 'attachment', 'actions' ]
  messbooks: Diary[] = [];
  diary: Diary = { title: '', start_date: new Date(), end_date: new Date(), status: true, creator: '', attachment: ''};

  ngOnInit(): void{
    this.getMessBooks();
  }

  getMessBooks(): void{
    this.messBookService.getMessBooks().subscribe((messbooks) => { this.messbooks = messbooks });
  }

  getMessBookById(id: String): void {
    this.messBookService.getMessBookById(id).subscribe((diary) => {
      this.diary = diary;
    });
  }

  deleteMessBook(id: String): void{
    this.deleteConfirmationService.openConfirmationDialog().subscribe((confirmed) => {
      if (confirmed) {
          this.messBookService.deleteMessBook(id).subscribe(() => {
            this.snackbarService.showSnackbar('Diary deleted successfully!');
            this.getMessBooks();
            this.diary = { title: '', start_date: new Date(), end_date: new Date(), status: true, creator: '', attachment: ''};
          })
      }
    });
  }

  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      this.diary.attachment = this.fileUploadService.extractFileName(selectedFile);
    }
  }
}
