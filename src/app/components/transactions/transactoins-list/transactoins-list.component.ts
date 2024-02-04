import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transaction } from '../transactions.model';
import { TransactionService } from '../transactions-service';
import { SnackbarService } from '../../../services/snackbar.service';

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
      private snackbarService: SnackbarService
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
      this.snackbarService.showSnackbar('Transaction deleted successfully!');
    });
}
}
