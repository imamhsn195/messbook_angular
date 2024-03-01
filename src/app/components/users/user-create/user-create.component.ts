import { Component } from '@angular/core';
import { User } from '../users.model';
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
    private router: Router
    ) {}
      
  ngOnInit(): void{
    this.getUsers();
  }
 
  users: User[] = [];
  user: User = { username: '', email: '', phone: '', password: '' };

  addUser(form: NgForm) : void {    
    if(!form.invalid){
      const formData = new FormData();
      formData.append('username', this.user.username);
      formData.append('email', this.user.email);
      formData.append('password', this.user.password);
      formData.append('phone', this.user.phone);
      if (this.user.profile_picture) {
        formData.append('profile_picture', this.user.profile_picture);
      }
        this.userService.addUser(formData).subscribe(() => {
          this.router.navigate(['/users']); 
          this.snackbarService.showSnackbar('User added successfully!');
        });
      }    
    }
  getUsers(): void{
    this.userService.getUsers(null,null).subscribe((users) => {
      this.users = users });
  }
  onFileChange(event: any){
    this.user.profile_picture =event.target.files[0];
    // console.log(this.user)
  }
}
