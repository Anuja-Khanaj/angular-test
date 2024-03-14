import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({providedIn: 'root'})
export class UserService {
    users: User[] = [
        new User('1', 'John Smith',  '12345'),
        new User('2', 'Merry Jane',  '12345'),
        new User('3', 'Mark Vought',  '12345'),
        new User('4', 'Sarah King',  '12345')
    ]
    
}