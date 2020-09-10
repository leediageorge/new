import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  depositForm = this.fb.group({
    acno:[''],
    pin:[''],
    amt:[''],
  });

  constructor(public dataService:DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){
    const result = this.dataService.deposit(this.depositForm.value.acno,
      this.depositForm.value.pin,
      this.depositForm.value.amt);
    if(result.status==true){
      alert(result.message);
      alert(result.balance);
    }else{
      alert(result.message);
    }
  }

}
