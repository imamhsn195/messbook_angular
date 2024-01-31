import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../services/snackbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  message: string | undefined;
  private subscription: Subscription;

  constructor(public snackBar: MatSnackBar, private snackbarService: SnackbarService) {
    this.subscription = this.snackbarService.snackbarState.subscribe((message) => {
      this.message = message;
      this.closeSnackBar();
    });
  }

  ngOnInit() {}

  closeSnackBar() {
    if (this.message) {
      this.snackBar.open(this.message, 'Close', {
        duration: 3000,
      });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
