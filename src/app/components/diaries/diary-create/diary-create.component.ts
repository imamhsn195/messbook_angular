import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DiaryService } from '../diary.service';
import { FileUploadService } from '../../../services/file-upload.service';
import { Diary } from '../diary.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core'; // Import MatNativeDateModule


@Component({
  selector: 'app-diary-create',
  templateUrl: './diary-create.component.html',
  styleUrl: './diary-create.component.css'
})
export class DiaryCreateComponent {

  constructor(
    private messBookService: DiaryService,
    private _snackBar: MatSnackBar,
    private fileUploadService: FileUploadService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  tableColumnHeaders: string[] = ["id", "title", 'startDate', 'endDate', 'status', 'attachment', 'actions' ]
  messbooks: Diary[] = [];
  diary: Diary = {
    title: '', status: true, creator: '65b8da08bad491200c1dcd65' , attachment: '',start_date: new Date('2024-04-22'), end_date: new Date('2024-05-23')
  };

  ngOnInit(): void{
    this.getMessBooks();
  }

  submit(form: NgForm) : void {
    if(!form.invalid){
      this.messBookService.addMessBook(this.diary).subscribe(() => {
        console.log(this.diary);
        
        this.router.navigate(['/diaries'])
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
      this.diary.attachment = this.fileUploadService.extractFileName(selectedFile);
    }
  }
}
