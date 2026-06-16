import { Component } from '@angular/core';
import { MyUserServiceService } from '../../services/my-user-service.service';
import { User } from '../../models/userModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-operations',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crud-operations.component.html',
  styleUrl: './crud-operations.component.css'
})
export class CrudOperationsComponent {

  userDetails: User[] = [];

  selectedUser: User | null = null;

  userId: number = 0;

  constructor(private userService: MyUserServiceService) {}

  getAllUsers() {
    this.userId = 0;
    this.userDetails = [];
    this.selectedUser = null; 
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        console.log('API Success');
        this.userDetails = response;
      },
      error: (err) => {
        console.error('API Failed', err);
      }
    });
  }

  getUserById(id: number) {
    this.userDetails = [];  
    this.userService.getUserById(id).subscribe({
      next: (response) => {
        console.log(response);
        this.selectedUser = response;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  clearTable(){
    this.userDetails = [];  
    this.selectedUser = null;
    this.userId = 0;    
  }
}