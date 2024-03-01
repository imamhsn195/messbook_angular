import { Component } from '@angular/core';
import { User } from '../users.model';
import { UserService } from '../users.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { DeleteConfirmationService } from '../../../services/delete-confirmation.service';
import { environment } from '../../../../environments/environment';
import { NgOptimizedImage } from '@angular/common'
import { PageEvent } from '@angular/material/paginator';
import { delay } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  search = "";
  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 15, 40];
  tableColumnHeaders: string[] = ["serialNumber", "id", "username", 'email', 'phone', 'profile_picture', 'actions' ]
  users: User[] = [];
  publicUrl = environment.publicUrl;
  constructor(
    private userService: UserService, 
    private snackbarService: SnackbarService,
    private deleteConfirmationService: DeleteConfirmationService,
    ) {}

  ngOnInit(): void{
    this.getUsers(this.pageIndex, this.pageSize, this.search);
  }
 
  getUsers(pageIndex: number, pageSize: number, search: string): void{
    this.userService.getUsers(pageIndex, pageSize, search).subscribe((response) => {
      this.users = response.users
      this.length = response.totalCount
    });
  }

  deleteUser(_id: String): void{
    this.deleteConfirmationService.openConfirmationDialog().subscribe((confirmed) => {
      if (confirmed) {
        this.userService.deleteUser(_id).subscribe(() => {
          this.snackbarService.showSnackbar('User deleted successfully!');
          this.getUsers(this.pageIndex, this.pageSize, this.search);
        })
      }
    });
  }
  paginationChange(event: PageEvent){
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getUsers(this.pageIndex, this.pageSize, this.search);
  }

  searchUsers(){
    delay(5000)
      this.getUsers(this.pageIndex, this.pageSize, this.search);
  }
}
