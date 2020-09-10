import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails={
    1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000},
    1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500},
    1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500},
    1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000},
    1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000},
  }

  currentUser;

  constructor() {
    this.getDetails();
  }

  saveDetails(){
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails));

    if(this.currentUser){
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    }
  }

  getDetails(){
    if(localStorage.getItem("accountDetails")){
      this.accountDetails = JSON.parse(localStorage.getItem("accountDetails"));
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
  }

  register(name,acno,pin,password){
    if (acno in this.accountDetails){
      alert("Account already exists. Please login");
      return false;
    }
    this.accountDetails[acno]={
      name,
      acno,
      pin,
      password,
      balance:0
    }
    this.saveDetails();
    return true;
  }

  login(acno1, password){
    var acno=parseInt(acno1);
    var data=this.accountDetails;
    if (acno in data){
      var pwd = data[acno].password
      if (pwd==password){
        this.currentUser = data[acno];
        this.saveDetails();
        return true;
      }
    }
  }


  deposit(dpacno,dppin,dpamt){
    var data=this.accountDetails;
    if (dpacno in data){
        var mpin = data[dpacno].pin
        if (dppin==mpin){
            data[dpacno].balance+= parseInt(dpamt);
            this.saveDetails();
            return {
              status:true,
              message:'account has been credited', 
              balance:data[dpacno].balance
            }
        }
    }
    else{
      return {
        status:false,
        message:'Incorrect Account Details'
      }
    }        

}

static withdraw(){
    var wacno=document.querySelector("#wacno").value
    var wpin=document.querySelector("#wpin").value
    var wamt=Number(document.querySelector("#wamt").value)
    var data=Bank.getAccountDetails()
    
    if (wacno in data){
        var mpin = data[wacno].pin
        if (wpin==mpin){
            data[wacno].balance-= wamt
            alert('account has been debited')
            alert(data[wacno].balance)
        }
    }
    else{
        alert("Incorrect Account Details")
    }        

}    

}
