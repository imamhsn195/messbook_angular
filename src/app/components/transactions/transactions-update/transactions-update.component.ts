import { Component } from '@angular/core';
import { Transaction } from '../transactions.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransactionService } from '../transactions-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-transactions-update',
  templateUrl: './transactions-update.component.html',
  styleUrl: './transactions-update.component.css'
})
export class TransactionsUpdateComponent {
  constructor(
    private transactionService: TransactionService, 
    private snackbarService: SnackbarService, 
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
        this.router.navigate(['api/transactions/list']);
        this.snackbarService.showSnackbar('Transaction updated successfully!');
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
}
