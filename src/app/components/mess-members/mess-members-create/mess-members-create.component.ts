import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../users/users.service';
import { User } from '../../users/users.model';
import { DiaryService } from '../../mess-books/mess-book.service';
import { Diary } from '../../mess-books/mess-book.model';
import { FileUploadService } from '../../../services/file-upload.service';
import { MessMember } from '../mess-member';
import { MessMemberService } from '../mess-member.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mess-members-create',
  templateUrl: './mess-members-create.component.html',
  styleUrl: './mess-members-create.component.css',
})

export class MessMembersCreateComponent implements OnInit {
  constructor(
    private userService: UserService, 
    private router: Router,
    private _snackBar: MatSnackBar,
    private messBookService: DiaryService,
    private messBookMemberService: MessMemberService,
    private fileUploadService: FileUploadService    ){}

    messbooksList: Diary[] = [];
    userList: User[] = [];
    messBookMembers: MessMember[] = [];
    messBookMember: MessMember = { 
      id: 1, 
      messBook: { id: "gjk", title: 'Mess 1', startDate: new Date('2024-04-22'), endDate: new Date('2024-05-23'), attachment: 'attachment3.jpg', status: true, createdBy: 2}, 
      members:[{ _id: "kgug", username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' }], 
      invitedBy:  { _id: "jyfiu", username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' }, 
      isAccepted: true 
    }

  ngOnInit(): void{
    this.getUsers();
    this.getMessBooks();
    this.getMessMembers();
  }
  submit(form: NgForm): void{
    if(!form.invalid){
      const maxId = this.messBookMembers.reduce((max, t) => (t.id > max ? t.id : max), 0);
      this.messBookMember.id = maxId + 1;    
      this.messBookMemberService.addMember(this.messBookMember).subscribe((messMember) => {
        this.router.navigate(['/api/mess-books/list'])
        this.showSnacBar('Mess member added successfully!', 'OK');
        console.log(messMember);
      });
    }else{
      console.log(form.errors);
    }
  }

  getMessMembers(): void{
    this.messBookMemberService.getMessMembers().subscribe(members => this.messBookMembers = members);
  }

  getUsers(): void{
    this.userService.getUsers().subscribe((users) => {
      this.userList = users 
    });
  }

  getMessBooks(): void{
    this.messBookService.getMessBooks().subscribe((messbooks) => { this.messbooksList = messbooks });
  }
  
  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      // this.user.profile_picture = this.fileUploadService.extractFileName(selectedFile);
    }
  }
  private showSnacBar(message: string, action: string, panelClass?: any): void {
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }


}
