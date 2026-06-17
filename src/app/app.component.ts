import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DashBoardComponent } from './shared/dash-board/dash-board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DashBoardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularApplication';
  get isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
