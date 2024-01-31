import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Diary } from '../diary.model';
import { FileUploadService } from '../../../services/file-upload.service';
import { DiaryService } from '../diary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-diary-update',
  templateUrl: './diary-update.component.html',
  styleUrl: './diary-update.component.css'
})
export class DiaryUpdateComponent {

  constructor(
    private messBookService: DiaryService,
    private snackbarService: SnackbarService,
    private fileUploadService: FileUploadService,
    private route: ActivatedRoute,
    private router: Router
    ){}
    ngOnInit(): void {
      this.getRecordById(this.route.snapshot.paramMap.get('id')!)
    }
    tableColumnHeaders: string[] = ["id", "title", 'startDate', 'endDate', 'status', 'attachment', 'actions' ]
    diaries: Diary[] = [];
    diary: Diary = { title: '', start_date: new Date(), end_date: new Date(), status: true, creator: '', attachment: ''};

  submit(form: NgForm) : void {
    if(!form.invalid){
      this.messBookService.UpdateMessBook(this.diary).subscribe(() => {
        this.router.navigate(['/diaries'])
        this.snackbarService.showSnackbar('Diary added successfully!');
      });
    }
  }

  getRecordById(id: String): void {
    this.messBookService.getMessBookById(id).subscribe((diary) => {
      this.diary = diary;
    });
  }

  getMessBooks(): void{
    this.messBookService.getMessBooks().subscribe((diaries) => { this.diaries = diaries });
  }

  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      this.diary.attachment = this.fileUploadService.extractFileName(selectedFile);
    }
  }
}
