import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../users.model';
import { FileUploadService } from '../../../services/file-upload.service';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  tableColumnHeaders: string[] = ["serialNumber", "id", "username", 'email', 'phone', 'profile_picture', 'actions' ]
  users: User[] = [];

  constructor(
    private userService: UserService, 
    private _snackBar: MatSnackBar,
    private fileUploadService: FileUploadService
    ) {}

  ngOnInit(): void{
    this.getUsers();
  }
 
  getUsers(): void{
    this.userService.getUsers().subscribe((users) => {
      this.users = users });
  }

  deleteUser(_id: String): void{
    this.userService.deleteUser(_id).subscribe(() => {
      this.showSnacBar('User deleted successfully!', "OK")
      this.getUsers();
    })
  }

  private showSnacBar(message: string, action: string, panelClass?: any): void {
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }
}
