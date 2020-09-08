import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group({
    acno:['',[ Validators.required ]],
    pwd:['',[ Validators.required ]],
  });

  constructor(private router:Router,
    private dataService: DataService,
    private fb:FormBuilder) { }

  login(){
    if(this.loginForm.valid){
      const result = this.dataService.login(this.loginForm.value.acno,this.loginForm.value.pwd);
      if(result){
        alert('Login Successful')
        this.router.navigateByUrl("dashboard")
      }else{
        alert('Invalid credentials')
      }
    }else{
      alert("Form is invalid");
    }
  }
}