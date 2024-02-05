import { Component } from '@angular/core';
import { User } from '../users.model';
import { UserService } from '../users.service';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getUserById(this.route.snapshot.paramMap.get('id')!)
  }
  user: User = { _id: '', username: '', email: '', phone: '', password: ''};
  submit(form: NgForm): void {
    if(!form.invalid){
      const formData = new FormData();
      formData.append('username', this.user.username);
      formData.append('email', this.user.email);
      formData.append('phone', this.user.phone );
      formData.append('password', this.user.password);
      formData.append('_id', this.user._id!);
      if (this.user.profile_picture) {
        formData.append('profile_picture', this.user.profile_picture )
      }
      this.userService.UpdateUser(formData).subscribe(() => {
        this.router.navigate(['/users'])
        this.snackbarService.showSnackbar('User updated succesfully!');
      });
    }
  }
  getUserById( _id:String ): void {
    this.userService.getUserById(_id).subscribe((user) => {
      this.user = user;
      console.log(user._id)
    });
  }
  onFileChange(event: any){
    this.user.profile_picture = event.target.files[0];
    console.info("user:" + this.user.profile_picture)
  }
}
