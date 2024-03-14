import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Card } from '../Model/card';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   isdisplay:boolean = true
  card:Card[];
  homeservice:HomeService = inject(HomeService)
  
  ngOnInit(): void {
     
    this.homeservice.getData().subscribe((card) => {
      this.isdisplay = false
      this.card = card;
      
    });
  }
}
