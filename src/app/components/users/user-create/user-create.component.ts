import { Component } from '@angular/core';
import { User } from '../users.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadService } from '../../../services/file-upload.service';
import { UserService } from '../users.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  constructor(
    private userService: UserService, 
    private _snackBar: MatSnackBar,
    private fileUploadService: FileUploadService,
    private router: Router
    ) {}
      
  ngOnInit(): void{
    this.getUsers();
  }
 
  users: User[] = [];
  user: User = { username: '', email: '', phone: '', password: '', profile_picture: '' };
  addUser(form: NgForm) : void {    
    if(!form.invalid){
        // const maxId = this.users.reduce((max, t) => (t.id > max ? t.id : max), 0);
        // this.user.id = maxId + 1;
        this.userService.addUser(this.user).subscribe(() => {
          this.router.navigate(['/api/users/list']); 
          this.showSnacBar('User added successfully!', 'OK');
        });
      }    
    }
  getUsers(): void{
    this.userService.getUsers().subscribe((users) => {
      this.users = users });
  }

  private showSnacBar(message: string, action: string, panelClass?: any): void {
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }
  
  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      this.user.profile_picture = this.fileUploadService.extractFileName(selectedFile);
    }
  }
}
