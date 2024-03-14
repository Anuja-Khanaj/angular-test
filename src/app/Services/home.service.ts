

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../Model/card';

@Injectable({providedIn: 'root'})
export class HomeService {
    constructor(private httpClient: HttpClient) { }
   getData():Observable<Card[]>{
   return this.httpClient.get<Card[]>('https://jsonplaceholder.typicode.com/photos')
   }
}