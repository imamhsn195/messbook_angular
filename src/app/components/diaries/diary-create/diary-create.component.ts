import { Component } from '@angular/core';
import { DiaryService } from '../diary.service';
import { Diary } from '../diary.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../../services/snackbar.service';
import { UserService } from '../../users/users.service';


@Component({
  selector: 'app-diary-create',
  templateUrl: './diary-create.component.html',
  styleUrl: './diary-create.component.css'
})
export class DiaryCreateComponent {

  constructor(
    private messBookService: DiaryService,
    private snackbarService: SnackbarService,
    private userService: UserService,
    private router: Router
    ){}

  tableColumnHeaders: string[] = ["id", "title", 'startDate', 'endDate', 'status', 'attachment', 'actions' ]
  messbooks: Diary[] = [];
  diary: Diary = {
    title: '', status: true, creator: '' , attachment: '',start_date: new Date('2024-04-22'), end_date: new Date('2024-05-23')
  };

  ngOnInit(): void{
    this.getMessBooks();
    this.userService.getUsers(0,100,'').forEach((response) => {
      this.diary.creator = response.users[0]._id!
    })
  }

  submit(form: NgForm) : void {
    if(!form.invalid){
      this.messBookService.addMessBook(this.diary).subscribe(() => {
        console.log(this.diary);
        
        this.router.navigate(['/diaries'])
        this.snackbarService.showSnackbar('Diary added successfully!');
      });
    }
  }

  getMessBooks(): void{
    this.messBookService.getMessBooks().subscribe((messbooks) => { this.messbooks = messbooks });
  }
}
