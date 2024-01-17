import { Component } from '@angular/core';
import { Transaction } from '../../../models/transactions.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadService } from '../../../services/file-upload.service';
import { TransactionService } from '../../../services/transactions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transactions-update',
  templateUrl: './transactions-update.component.html',
  styleUrl: './transactions-update.component.css'
})
export class TransactionsUpdateComponent {
  constructor(
    private transactionService: TransactionService, 
    private _snackBar: MatSnackBar, 
    private fileUploadService: FileUploadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  transactions: Transaction[] = [];
  transaction: Transaction =  { id: 0, description: '', attachment: '', amount: 0.00 };
  ngOnInit(): void{
    this.getTransactionByid(Number(this.route.snapshot.paramMap.get('id')))
  }

  submit(form: NgForm): void{
    if(!form.invalid){
      this.transactionService.updateTransaction(this.transaction).subscribe((transaction) => {
        this.router.navigate(['api/transactions/list'])
        this.showSnacBar('Transaction updated successfully!','OK');
      })
    }
    }
  getTransactionByid(id: number): void {
    this.transactionService.getTransactionById(id).subscribe(transaction =>{
      this.transaction = transaction;
      this.transaction.attachment = transaction.attachment;
    });
  }
  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
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
