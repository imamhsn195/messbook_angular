import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DeleteConfirmationComponent } from '../components/common/delete-confirmation/delete-confirmation.component';

@Injectable({
  providedIn: 'root',
})
export class DeleteConfirmationService {
  constructor(private dialog: MatDialog) {}

  openConfirmationDialog(): Observable<boolean> {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    return dialogRef.afterClosed();
  }
}
