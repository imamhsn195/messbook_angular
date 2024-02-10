import { Component } from '@angular/core';
import { User } from '../users.model';
import { UserService } from '../users.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { DeleteConfirmationService } from '../../../services/delete-confirmation.service';
import { environment } from '../../../../environments/environment';
import { NgOptimizedImage } from '@angular/common'
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  tableColumnHeaders: string[] = ["serialNumber", "id", "username", 'email', 'phone', 'profile_picture', 'actions' ]
  users: User[] = [];
  publicUrl = environment.publicUrl;
  constructor(
    private userService: UserService, 
    private snackbarService: SnackbarService,
    private deleteConfirmationService: DeleteConfirmationService,
    ) {}

  ngOnInit(): void{
    this.getUsers();
  }
 
  getUsers(): void{
    this.userService.getUsers().subscribe((users) => {
      this.users = users });
  }

  deleteUser(_id: String): void{
    this.deleteConfirmationService.openConfirmationDialog().subscribe((confirmed) => {
      if (confirmed) {
        this.userService.deleteUser(_id).subscribe(() => {
          this.snackbarService.showSnackbar('User deleted successfully!');
          this.getUsers();
        })
      }
    });
  }
  paginationChange(event: PageEvent){
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    console.log(this.length, this.pageSize, this.pageIndex);
  }
}
