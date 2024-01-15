import { Component } from '@angular/core';
import { User } from '../models/users.model';
import { UserService } from '../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  tableColumnHeaders: string[] = ["id", "username", 'email', 'phone', 'profile_picture', 'actions' ]
  isNewuser = true;
  users: User[] = [];
  user: User = { id: 0, username: '', email: '', phone: '', password: '', profile_picture: '' };

  constructor(private userService: UserService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void{
    this.getUsers();
  }
  addUser() : void {        
    if(this.isNewuser){
      const maxId = this.users.reduce((max, t) => (t.id > max ? t.id : max), 0);
      this.user.id = maxId + 1;
      this.userService.addUser(this.user).subscribe(() => { 
        this.getUsers();
        this.showSnacBar('User added successfully!', 'OK');
      });
    }else{
      this.userService.UpdateUser(this.user).subscribe(() => { 
        this.getUsers();
        this.showSnacBar('User updated succesfully!', 'OK');
      });
    }
  }

  getUsers(): void{
    this.userService.getUsers().subscribe((users) => {
      this.users = users });
  }

  getUserById(id: number): void {
    this.userService.getUserById(id).subscribe((user) => {
      this.user = user;
      this.isNewuser = false;
    });
  }
  
  deleteUser(id: number): void{
    this.userService.deleteUser(id).subscribe(() => {
      this.showSnacBar('User deleted successfully!', "OK")
      this.getUsers();
    })
  }

  private showSnacBar(message: string, action: string, panelClass?: any): void {
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }

}
