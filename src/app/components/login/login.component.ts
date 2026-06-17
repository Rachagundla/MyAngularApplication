import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {

    this.http.get<any>(
      `http://localhost:7000/loginUsers?username=${this.username}&password=${this.password}`
    )
    .subscribe({

      next: (response) => {
  
        if (response.length > 0) {

          // Store login flag
         localStorage.setItem('isLoggedIn', 'true');

          // Navigate to Dashboard
          this.router.navigate(['/homeComponent']);

        } else {

          this.errorMessage =
            'Invalid Username or Password';
        }
      },

      error: (err) => {
        console.error(err);
      }
    });
  }
}
