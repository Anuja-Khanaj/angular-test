import { Component } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  
  reactiveform:FormGroup

  ngOnInit(){
    this.reactiveform = new FormGroup({
      fname : new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required),
      phoneNum: new FormControl('',Validators.maxLength(10)),
      email: new FormControl('',Validators.email),
      address: new FormGroup({
        pincode: new FormControl(''),
        country: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        street: new FormControl('')
      })
   
    })
  }




  onSubmit(){
      console.log(this.reactiveform.value);
      alert("New User Has Added :)   ")
      this.reactiveform.reset();
  }
}
