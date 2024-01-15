import { Component } from '@angular/core';
import { Transaction } from '../models/transactions.model';
import { TransactionService } from '../services/transactions.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls:['./transactions.component.css'],
})
export class TransactionsComponent {
  tableColumnHeaders : string[] = ['id', 'dateTime', 'description', 'amount', 'attachment', 'actions'];
  isNewTransaction = true;
  transactions: Transaction[] = [];
  newTransaction: Transaction = { id: 0, dateTime: new Date, description: '', attachment: '', amount: 0.00 }

  constructor(private transactionService: TransactionService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void{
    this.getTransactions();
  }

  addTransaction(): void{
    if(this.isNewTransaction){
      const maxId = this.transactions.reduce((max, t) => (t.id > max ? t.id : max), 0);
      this.newTransaction.id = maxId + 1;
      this.transactionService.addTransaction(this.newTransaction).subscribe(() => this.getTransactions());
      this.showSnacBar('Transaction added successfully!', 'Ok',  ['myClass']);
    }else{
      this.transactionService.updateTransaction(this.newTransaction).subscribe((transaction) => {
        this.getTransactions();
        this.showSnacBar('Transaction updated successfully!','OK');
      })
    }
    this.isNewTransaction = true;
    this.newTransaction = { id: 0, dateTime: new Date, description: '', attachment: '', amount: 0.00 }
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }

  getTransactionByid(id: number): void {
    this.transactionService.getTransactionById(id).subscribe(transaction =>{
      this.newTransaction = transaction;
      this.isNewTransaction = false;
    });
  }

  // updateTransaction(transaction: Transaction): void{
  //   this.transactionService.updateTransaction(transaction).subscribe(() => this.getTransactions());
  //   this.isNewTransaction = true;
  //   this.newTransaction = { id: 0, dateTime: "", description: '', attachment: '', amount: 0 }
  // }

  deleteTransaction(id: number):void{
      this.transactionService.deleteTransaction(id).subscribe(() => {
        this.getTransactions();
        this.showSnacBar('Transaction deleted successfully!', 'Ok', ['blue-snackbar']);
      });
  }

  private showSnacBar(message: string, action: string, panelClass?: any): void{
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }
}
