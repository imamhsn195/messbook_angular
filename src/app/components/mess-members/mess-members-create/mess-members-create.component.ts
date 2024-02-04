import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../users/users.service';
import { User } from '../../users/users.model';
import { DiaryService } from '../../diaries/diary.service';
import { Diary } from '../../diaries/diary.model';
import { MessMember } from '../mess-member';
import { MessMemberService } from '../mess-member.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-mess-members-create',
  templateUrl: './mess-members-create.component.html',
  styleUrl: './mess-members-create.component.css',
})

export class MessMembersCreateComponent implements OnInit {
  constructor(
      private userService: UserService, 
      private router: Router,
      private snackbarService: SnackbarService,
      private messBookService: DiaryService,
      private messBookMemberService: MessMemberService 
    ){}

    messbooksList: Diary[] = [];
    userList: User[] = [];
    messBookMembers: MessMember[] = [];
    messBookMember: MessMember = { 
      id: 1, 
      diary: { _id: "gjk", title: 'Mess 1', start_date: new Date('2024-04-22'), end_date: new Date('2024-05-23'), attachment: 'attachment3.jpg', status: true, creator: ''}, 
      members:[{ _id: "kgug", username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123' }], 
      invitedBy:  { _id: "jyfiu", username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123' }, 
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
        this.router.navigate(['/diaries']);
        this.snackbarService.showSnackbar('Mess member added successfully!');
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
}
