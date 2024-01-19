import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mess-members-create',
  templateUrl: './mess-members-create.component.html',
  styleUrl: './mess-members-create.component.css',
})
export class MessMembersCreateComponent {
  constructor(){}

  messbooksList: string[] = ['MessBook 1', 'MessBook 2', 'MessBook 3', 'MessBook 4', 'MessBook 5', 'MessBook 6'];
  userList: string[] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6'];

  myGroup = new FormGroup({
    messBookId: new FormControl(),
    userId: new FormControl(),
    invitedBy: new FormControl(),
    isAccepted: new FormControl(),

});

}
