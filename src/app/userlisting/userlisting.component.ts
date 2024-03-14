import { Component, inject } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Model/User';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

  totaluser:UserService = inject(UserService)
  user:User[]

  ngOnInit(){
   this.user =  this.totaluser.users
  }
}
