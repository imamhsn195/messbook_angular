import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarSubject = new Subject<string>();

  snackbarState = this.snackbarSubject.asObservable();

  constructor(private snackBar: MatSnackBar) {}

  showSnackbar(message: string, panelClass = ['panelClass']) {
    this.snackbarSubject.next(message);
    this.snackBar.open(message, 'Close', {
      panelClass: panelClass,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}