import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DiaryService } from '../mess-book.service';
import { FileUploadService } from '../../../services/file-upload.service';
import { Diary } from '../mess-book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core'; // Import MatNativeDateModule


@Component({
  selector: 'app-messbooks-create',
  templateUrl: './messbooks-create.component.html',
  styleUrl: './messbooks-create.component.css'
})
export class MessbooksCreateComponent {

  constructor(
    private messBookService: DiaryService, 
    private _snackBar: MatSnackBar,
    private fileUploadService: FileUploadService,
    private route: ActivatedRoute,
    private router: Router
    ){}
  
  tableColumnHeaders: string[] = ["id", "title", 'startDate', 'endDate', 'status', 'attachment', 'actions' ]
  messbooks: Diary[] = [];
  messbook: Diary = {
    title: '', status: true, createdBy: 0, attachment: '',startDate: new Date('2024-04-22'), endDate: new Date('2024-05-23')
  };

  ngOnInit(): void{
    this.getMessBooks();
  }
  
  submit(form: NgForm) : void {   
    if(!form.invalid){
      // const maxId = this.messbooks.reduce((max, t) => (t.id > max ? t.id : max), 0);
      // this.messbook.id = maxId + 1;
      this.messBookService.addMessBook(this.messbook).subscribe(() => { 
        this.router.navigate(['/api/mess-books/list'])
        this.showSnacBar('Diary added successfully!', 'OK');
      });  
    } 
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
