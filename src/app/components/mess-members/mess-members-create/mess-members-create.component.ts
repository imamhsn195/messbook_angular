import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../users/users.service';
import { User } from '../../users/users.model';
import { MessBookService } from '../../mess-books/mess-book.service';
import { MessBook } from '../../mess-books/mess-book.model';

@Component({
  selector: 'app-mess-members-create',
  templateUrl: './mess-members-create.component.html',
  styleUrl: './mess-members-create.component.css',
})
export class MessMembersCreateComponent {
  constructor(
    private userService: UserService, 
    private messBookService: MessBookService
    ){}

  ngOnInit(): void{
    this.getUsers();
    this.getMessBooks();
  }
    
  messbooksList: MessBook[] = [];
  userList: User[] = [];
  
  formGroup = new FormGroup({
    messBook: new FormControl(),
    members: new FormControl(),
    invitedBy: new FormControl(),
    isAccepted: new FormControl(),
  });

  getUsers(): void{
    this.userService.getUsers().subscribe((users) => {
      this.userList = users });
  }

  getMessBooks(): void{
    this.messBookService.getMessBooks().subscribe((messbooks) => { this.messbooksList = messbooks });
  }

}
