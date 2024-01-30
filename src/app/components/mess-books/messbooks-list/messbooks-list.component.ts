import { Component } from '@angular/core';
import { DiaryService } from '../mess-book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Diary } from '../mess-book.model';
import { FileUploadService } from '../../../services/file-upload.service';

@Component({
  selector: 'app-messbooks-list',
  templateUrl: './messbooks-list.component.html',
  styleUrl: './messbooks-list.component.css'
})
export class MessbooksListComponent {

  constructor(
    private messBookService: DiaryService, 
    private _snackBar: MatSnackBar,
    private fileUploadService: FileUploadService
    ){}
  
  tableColumnHeaders: string[] = ["id", "title", 'startDate', 'endDate', 'status', 'attachment', 'actions' ]
  isNew = true;
  messbooks: Diary[] = [];
  diary: Diary = { title: '', startDate: new Date(), endDate: new Date(), status: true, createdBy: 0, attachment: ''};

  ngOnInit(): void{
    this.getMessBooks();
  }
  
  getMessBooks(): void{
    this.messBookService.getMessBooks().subscribe((messbooks) => { this.messbooks = messbooks });
  }

  getMessBookById(id: number): void {
    this.messBookService.getMessBookById(id).subscribe((diary) => {
      this.diary = diary;      
      this.isNew = false;
    });
  }
  
  deleteMessBook(id: number): void{
    this.messBookService.deleteMessBook(id).subscribe(() => {
      this.showSnacBar('Diary deleted successfully!', "OK")
      this.getMessBooks();
      this.diary = { title: '', startDate: new Date(), endDate: new Date(), status: true, createdBy: 0, attachment: ''};
      this.isNew = true;
    })
  }

  private showSnacBar(message: string, action: string, panelClass?: any): void {
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }

  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      this.diary.attachment = this.fileUploadService.extractFileName(selectedFile);
    }
  }
}
