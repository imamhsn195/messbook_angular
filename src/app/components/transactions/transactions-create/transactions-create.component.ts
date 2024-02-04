import { Component } from '@angular/core';
import { TransactionService } from '../transactions-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transaction } from '../transactions.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-transactions-create',
  templateUrl: './transactions-create.component.html',
  styleUrl: './transactions-create.component.css'
})
export class TransactionsCreateComponent {
  constructor(
    private transactionService: TransactionService, 
    private snackbarService: SnackbarService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}
  transactions: Transaction[] = [];
  transaction: Transaction = { id: 0, description: '', attachment: '', amount: 0.00 }
  ngOnInit(): void{
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }

  submit(form: NgForm): void{
    if(!form.invalid){
      const maxId = this.transactions.reduce((max, t) => (t.id > max ? t.id : max), 0);
      this.transaction.id = maxId + 1;
      this.transactionService.addTransaction(this.transaction).subscribe(() => this.getTransactions());
      this.snackbarService.showSnackbar('Transaction added successfully!');
      this.router.navigate(['api/transactions/list']);
    }
  }
}
