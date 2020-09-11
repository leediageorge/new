import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  transactions=[];
  constructor(private dataService:DataService) { 
    this.transactions = dataService.getTransactions();
  }

  ngOnInit(): void {
  }

}