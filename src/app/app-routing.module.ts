import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';
import { TransactoinsListComponent } from './components/transactions/transactoins-list/transactoins-list.component';
import { TransactionsCreateComponent } from './components/transactions/transactions-create/transactions-create.component';
import { TransactionsUpdateComponent } from './components/transactions/transactions-update/transactions-update.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { DiaryListComponent } from './components/diaries/diary-list/diary-list.component';
import { DiaryCreateComponent } from './components/diaries/diary-create/diary-create.component';
import { DiaryUpdateComponent } from './components/diaries/diary-update/diary-update.component';
import { MessMembersListComponent } from './components/mess-members/mess-members-list/mess-members-list.component';
import { MessMembersCreateComponent } from './components/mess-members/mess-members-create/mess-members-create.component';
import { MessMembersUpdateComponent } from './components/mess-members/mess-members-update/mess-members-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/api/dashboard', pathMatch: 'full' },
  { path: 'api/dashboard', component: DashboardComponent },
  { path: 'api/transactions/list', component: TransactoinsListComponent },
  { path: 'api/transactions/create', component: TransactionsCreateComponent },
  { path: 'api/transactions/update/:id', component: TransactionsUpdateComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/:id', component: UserUpdateComponent },
  { path: 'diaries', component: DiaryListComponent },
  { path: 'diaries/create', component: DiaryCreateComponent },
  { path: 'diaries/:id', component: DiaryUpdateComponent },
  { path: 'api/mess-members/list', component: MessMembersListComponent },
  { path: 'api/mess-members/create', component: MessMembersCreateComponent },
  { path: 'api/mess-members/update/:id', component: MessMembersUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 