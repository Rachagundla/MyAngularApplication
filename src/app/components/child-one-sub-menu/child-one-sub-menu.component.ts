import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';
import { MyQuoteServiceService } from '../../services/my-quote-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-child-one-sub-menu',
  imports: [CommonModule],
  templateUrl: './child-one-sub-menu.component.html',
  styleUrl: './child-one-sub-menu.component.css'
})
export class ChildOneSubMenuComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private userService: MyQuoteServiceService) {}

  ngOnInit(): void {
    console.log('ChildOne Loaded');
  
    this.userService.getAllQuotes().subscribe({
      next: (response) => {
        console.log('Quotes Response:', response);
        this.quotes = response.quotes;
      },
      error: (err) => {
        console.error('Quotes API Error:', err);
      }
    });
  }
}
