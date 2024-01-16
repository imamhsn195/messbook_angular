import { Component } from '@angular/core';
import { Transaction } from '../../models/transactions.model';
import { TransactionService } from '../../services/transactions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadService } from '../../services/file-upload.service';

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

  constructor(
      private transactionService: TransactionService, 
      private _snackBar: MatSnackBar, 
      private fileUploadService: FileUploadService
    ) {}

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
        console.log("Updated" + transaction);
        
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
      console.log(this.newTransaction);
      console.log(this.newTransaction.attachment);
      
      
      this.newTransaction.attachment = transaction.attachment;
      this.isNewTransaction = false;
    });
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
