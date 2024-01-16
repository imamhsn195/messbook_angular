import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { RouterModule, Routes } from '@angular/router';

// Angular Material Modules
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

// Components
import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { HeaderComponent } from './components/header/header.component';
import { MessBookComponent } from './components/mess-book/mess-book.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

const routes : Routes = [
  { path: '', redirectTo: 'api/dashboard', pathMatch: 'full'},
  { path: 'api/dashboard', component: DashboardComponent },
  { path: 'api/transactions', component: TransactionsComponent },
  { path: 'api/users', component: UserListComponent },
  { path: 'api/users/create', component: UserCreateComponent },
  { path: 'api/users/update/:id', component: UserUpdateComponent },
  { path: 'api/mess-books', component: MessBookComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    HeaderComponent,
    MessBookComponent,
    DashboardComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes),

    // Angular Material Modules
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    // In-memory Web API for demo purposes
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
