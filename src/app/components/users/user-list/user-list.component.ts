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
  pageSize = 2;
  pageIndex = 0;
  pageSizeOptions = [2, 5, 10];
  tableColumnHeaders: string[] = ["serialNumber", "id", "username", 'email', 'phone', 'profile_picture', 'actions' ]
  users: User[] = [];
  publicUrl = environment.publicUrl;
  constructor(
    private userService: UserService, 
    private snackbarService: SnackbarService,
    private deleteConfirmationService: DeleteConfirmationService,
    ) {}

  ngOnInit(): void{
    this.getUsers(this.pageIndex, this.pageSize);
  }
 
  getUsers(pageIndex: Number, pageSize: Number): void{
    this.userService.getUsers(pageIndex, pageSize).subscribe((users) => {
      this.users = users });
  }

  deleteUser(_id: String): void{
    this.deleteConfirmationService.openConfirmationDialog().subscribe((confirmed) => {
      if (confirmed) {
        this.userService.deleteUser(_id).subscribe(() => {
          this.snackbarService.showSnackbar('User deleted successfully!');
          this.getUsers(this.pageIndex, this.pageSize);
        })
      }
    });
  }
  paginationChange(event: PageEvent){
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getUsers(this.pageIndex, this.pageSize);
  }
}
