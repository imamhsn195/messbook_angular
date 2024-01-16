import { Component } from '@angular/core';
import { TransactionService } from '../../../services/transactions.service';
import { FileUploadService } from '../../../services/file-upload.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transaction } from '../../../models/transactions.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transactions-create',
  templateUrl: './transactions-create.component.html',
  styleUrl: './transactions-create.component.css'
})
export class TransactionsCreateComponent {
  constructor(
    private transactionService: TransactionService, 
    private _snackBar: MatSnackBar, 
    private fileUploadService: FileUploadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  transactions: Transaction[] = [];
  transaction: Transaction = { id: 0, dateTime: new Date, description: '', attachment: '', amount: 0.00 }
  ngOnInit(): void{
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }

  add(): void{
      const maxId = this.transactions.reduce((max, t) => (t.id > max ? t.id : max), 0);
      this.transaction.id = maxId + 1;
      this.transactionService.addTransaction(this.transaction).subscribe(() => this.getTransactions());
      this.showSnacBar('Transaction added successfully!', 'Ok',  ['myClass']);
      this.router.navigate(['api/transactions/list'])
  }
  
  private showSnacBar(message: string, action: string, panelClass?: any): void{
    this._snackBar.open(message , action, { horizontalPosition: 'center', verticalPosition: 'top', panelClass:panelClass});
  }

  onFileChange(event: any): void {
    const selectedFile = this.fileUploadService.handleFileInput(event);
    if (selectedFile) {
      this.transaction.attachment = this.fileUploadService.extractFileName(selectedFile);
    }
  }
}
