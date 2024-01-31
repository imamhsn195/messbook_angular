import { Component } from '@angular/core';
import { User } from '../users.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadService } from '../../../services/file-upload.service';
import { UserService } from '../users.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  constructor(
    private userService: UserService, 
    private snackbarService: SnackbarService,
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
        this.userService.addUser(this.user).subscribe(() => {
          this.router.navigate(['/users']); 
          this.snackbarService.showSnackbar('User added successfully!');
        });
      }    
    }
  getUsers(): void{
    this.userService.getUsers().subscribe((users) => {
      this.users = users });
  }

  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      this.user.profile_picture = this.fileUploadService.extractFileName(selectedFile);
    }
  }
}
