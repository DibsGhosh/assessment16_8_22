import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../Models/UserInterface/user.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  valid:any;
  userInfo:user = {
    firstName: "",
    middleName: '',
    lastName: '',
    dept: 'IT',
    gender: 'Male',
    Dob: undefined,
    address: '',
    pincode: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  saveInfo(form:NgForm){
    this.valid=form.status;
    
  }

  checkValid(){
    if(this.valid == "VALID"){
      alert('Your details inserted successfully.');
    }

  }
}
