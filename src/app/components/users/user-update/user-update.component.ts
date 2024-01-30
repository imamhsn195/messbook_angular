import { Component } from '@angular/core';
import { User } from '../users.model';
import { UserService } from '../users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadService } from '../../../services/file-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {
    constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
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
        this.showSnacBar('User updated succesfully!', 'OK');
      });
    }
  }
  private showSnacBar(message: string, action: string, panelClass?: any): void {
    this._snackBar.open(message, action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass: panelClass });
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
