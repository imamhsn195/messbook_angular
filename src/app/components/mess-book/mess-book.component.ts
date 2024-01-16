import { Component } from '@angular/core';
import { MessBook } from '../../models/mess-book.model';
import { MessBookService } from '../../services/mess-book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-mess-book',
  templateUrl: './mess-book.component.html',
  styleUrl: './mess-book.component.css'
})
export class MessBookComponent {

  constructor(
    private messBookService: MessBookService, 
    private _snackBar: MatSnackBar,
    private fileUploadService: FileUploadService
    ){}
  
  tableColumnHeaders: string[] = ["id", "title", 'startDate', 'endDate', 'status', 'attachment', 'actions' ]
  isNew = true;
  messbooks: MessBook[] = [];
  messbook: MessBook = { id: 0, title: '', startDate: new Date(), endDate: new Date(), status: true, createdBy: 0, attachment: ''};

  ngOnInit(): void{
    this.getMessBooks();
  }
  
  addMessBook() : void {        
    if(this.isNew){
      const maxId = this.messbooks.reduce((max, t) => (t.id > max ? t.id : max), 0);
      this.messbook.id = maxId + 1;
      this.messBookService.addMessBook(this.messbook).subscribe(() => { 
        this.getMessBooks();
        this.showSnacBar('MessBook added successfully!', 'OK');
      });
    }else{
      this.messBookService.UpdateMessBook(this.messbook).subscribe(() => { 
        this.getMessBooks();
        this.showSnacBar('MessBook updated succesfully!', 'OK');
      });
    }
    this.isNew = true;
    this.messbook = { id: 0, title: '', startDate: new Date(), endDate: new Date(), status: true, createdBy: 0, attachment: ''};
  }

  getMessBooks(): void{
    this.messBookService.getMessBooks().subscribe((messbooks) => { this.messbooks = messbooks });
  }

  getMessBookById(id: number): void {
    this.messBookService.getMessBookById(id).subscribe((messbook) => {
      this.messbook = messbook;      
      this.isNew = false;
    });
  }
  
  deleteMessBook(id: number): void{
    this.messBookService.deleteMessBook(id).subscribe(() => {
      this.showSnacBar('MessBook deleted successfully!', "OK")
      this.getMessBooks();
      this.messbook = { id: 0, title: '', startDate: new Date(), endDate: new Date(), status: true, createdBy: 0, attachment: ''};
      this.isNew = true;
    })
  }

  private showSnacBar(message: string, action: string, panelClass?: any): void {
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }

  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      this.messbook.attachment = this.fileUploadService.extractFileName(selectedFile);
    }
  }
}
