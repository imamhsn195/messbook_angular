import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transaction } from '../transactions.model';
import { FileUploadService } from '../../../services/file-upload.service';
import { TransactionService } from '../transactions-service';

@Component({
  selector: 'app-transactoins-list',
  templateUrl: './transactoins-list.component.html',
  styleUrl: './transactoins-list.component.css'
})
export class TransactoinsListComponent {
  tableColumnHeaders : string[] = ['id', 'dateTime', 'description', 'amount', 'attachment', 'actions'];
  isNewTransaction = true;
  transactions: Transaction[] = [];
  newTransaction: Transaction = { id: 0, dateTime: new Date, description: '', attachment: '', amount: 0.00 }

  constructor(
      private transactionService: TransactionService, 
      private _snackBar: MatSnackBar, 
      private fileUploadService: FileUploadService
    ) {}

  ngOnInit(): void{
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }

  deleteTransaction(id: number):void{
    this.transactionService.deleteTransaction(id).subscribe(() => {
      this.getTransactions();
      this.showSnacBar('Transaction deleted successfully!', 'Ok', ['blue-snackbar']);
    });
}

  private showSnacBar(message: string, action: string, panelClass?: any): void{
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }

  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      this.newTransaction.attachment = this.fileUploadService.extractFileName(selectedFile);
    }
  }

}
