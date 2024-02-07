import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';
import { TransactionsCreateComponent } from './components/transactions/transactions-create/transactions-create.component';
import { TransactionsUpdateComponent } from './components/transactions/transactions-update/transactions-update.component';
import { TransactoinsListComponent } from './components/transactions/transactoins-list/transactoins-list.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { DiaryCreateComponent } from './components/diaries/diary-create/diary-create.component';
import { DiaryUpdateComponent } from './components/diaries/diary-update/diary-update.component';
import { DiaryListComponent } from './components/diaries/diary-list/diary-list.component';
import { MessMembersCreateComponent } from './components/mess-members/mess-members-create/mess-members-create.component';
import { MessMembersUpdateComponent } from './components/mess-members/mess-members-update/mess-members-update.component';
import { MessMembersListComponent } from './components/mess-members/mess-members-list/mess-members-list.component';
import { SnackbarComponent } from './components/common/snackbar/snackbar.component';
import { DeleteConfirmationComponent } from './components/common/delete-confirmation/delete-confirmation.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TransactionsCreateComponent,
    TransactionsUpdateComponent,
    TransactoinsListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserListComponent,
    DiaryCreateComponent,
    DiaryUpdateComponent,
    DiaryListComponent,
    MessMembersCreateComponent,
    MessMembersUpdateComponent,
    MessMembersListComponent,
    SnackbarComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
