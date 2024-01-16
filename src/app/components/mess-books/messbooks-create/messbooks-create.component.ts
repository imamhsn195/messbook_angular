import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessBookService } from '../../../services/mess-book.service';
import { FileUploadService } from '../../../services/file-upload.service';
import { MessBook } from '../../../models/mess-book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-messbooks-create',
  templateUrl: './messbooks-create.component.html',
  styleUrl: './messbooks-create.component.css'
})
export class MessbooksCreateComponent {

  constructor(
    private messBookService: MessBookService, 
    private _snackBar: MatSnackBar,
    private fileUploadService: FileUploadService,
    private route: ActivatedRoute,
    private router: Router
    ){}
  
  tableColumnHeaders: string[] = ["id", "title", 'startDate', 'endDate', 'status', 'attachment', 'actions' ]
  messbooks: MessBook[] = [];
  messbook: MessBook = { id: 0, title: '', startDate: new Date(), endDate: new Date(), status: true, createdBy: 0, attachment: ''};

  ngOnInit(): void{
    this.getMessBooks();
  }
  
  create() : void {    
      const maxId = this.messbooks.reduce((max, t) => (t.id > max ? t.id : max), 0);
      this.messbook.id = maxId + 1;
      this.messBookService.addMessBook(this.messbook).subscribe(() => { 
        this.router.navigate(['/api/mess-books/list'])
        this.showSnacBar('MessBook added successfully!', 'OK');
      });
  }

  getMessBooks(): void{
    this.messBookService.getMessBooks().subscribe((messbooks) => { this.messbooks = messbooks });
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
