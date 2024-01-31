import { Component } from '@angular/core';
import { User } from '../users.model';
import { UserService } from '../users.service';
import { FileUploadService } from '../../../services/file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {
    constructor(
    private userService: UserService,
    private snackbarService: SnackbarService,
    private fileUploadService: FileUploadService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getUserById(this.route.snapshot.paramMap.get('id')!)
  }
  user: User = { _id: '', username: '', email: '', phone: '', password: '', profile_picture: '' };
  submit(form: NgForm): void {
    if(!form.invalid){
      this.userService.UpdateUser(this.user).subscribe(() => {
        this.router.navigate(['/users'])
        this.snackbarService.showSnackbar('User updated succesfully!');
      });
    }
  }

  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      this.user.profile_picture = this.fileUploadService.extractFileName(selectedFile);
    }
  }
  getUserById( _id:String ): void {
    this.userService.getUserById(_id).subscribe((user) => {
      this.user = user;
    });
  }
}
