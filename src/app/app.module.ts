import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TransactionsComponent } from './transactions/transactions.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule} from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsersComponent } from './users/users.component';
import { MessBookComponent } from './mess-book/mess-book.component';
import { MatSelectModule } from '@angular/material/select';

const routes : Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'api/transactions', component: TransactionsComponent },
  { path: 'api/users', component: UsersComponent },
  { path: 'api/mess-books', component: MessBookComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    HeaderComponent,
    UsersComponent,
    MessBookComponent
  ],
  imports: [
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500}),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
