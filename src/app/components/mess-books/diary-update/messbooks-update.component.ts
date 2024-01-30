import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Diary } from '../diary.model';
import { FileUploadService } from '../../../services/file-upload.service';
import { DiaryService } from '../diary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-messbooks-update',
  templateUrl: './messbooks-update.component.html',
  styleUrl: './messbooks-update.component.css'
})
export class MessbooksUpdateComponent {
  
  constructor(
    private messBookService: DiaryService, 
    private _snackBar: MatSnackBar,
    private fileUploadService: FileUploadService,
    private route: ActivatedRoute,
    private router: Router
    ){}
    ngOnInit(): void {
      this.getRecordById(Number(this.route.snapshot.paramMap.get('id')))
    }
    tableColumnHeaders: string[] = ["id", "title", 'startDate', 'endDate', 'status', 'attachment', 'actions' ]
    messbooks: Diary[] = [];
    diary: Diary = { title: '', startDate: new Date(), endDate: new Date(), status: true, createdBy: 0, attachment: ''};
  
  submit(form: NgForm) : void {    
    if(!form.invalid){   
      // const maxId = this.messbooks.reduce((max, t) => (t.id > max ? t.id : max), 0);
      // this.diary.id = maxId + 1;
      this.messBookService.addMessBook(this.diary).subscribe(() => { 
        this.router.navigate(['/diaries'])
        this.showSnacBar('Diary added successfully!', 'OK');
      });
    } 
  }

  getRecordById(id: number): void {
    this.messBookService.getMessBookById(id).subscribe((diary) => {
      this.diary = diary;   
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
      this.diary.attachment = this.fileUploadService.extractFileName(selectedFile);
    }
  }
}
