import { Component } from '@angular/core';
import { User } from '../../../models/users.model';
import { UserService } from '../../../services/users.service';
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
    this.getUserById(Number(this.route.snapshot.paramMap.get('id')))
  }
  user_id: number = 0;
  user: User = { id: 0, username: '', email: '', phone: '', password: '', profile_picture: '' };
  submit(form: NgForm): void {
    if(!form.invalid){
      this.userService.UpdateUser(this.user).subscribe(() => {
        this.router.navigate(['/api/users/list'])
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
  getUserById(id:number): void {
    this.userService.getUserById(id).subscribe((user) => {
      this.user = user;
    });
  }
}
