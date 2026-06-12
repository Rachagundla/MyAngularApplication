import { Component } from '@angular/core';
import { EmployeeDetails } from '../../models/employeeModel';
import { FormsModule } from '@angular/forms';
import { SecondComponentComponent } from '../second-component/second-component.component';  // This is used for accessing the @input decorator variable employeeDetails which used in html 
import { CommonModule } from '@angular/common';    // This module helps us to provide *ngIf used in html

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [
    FormsModule,
    SecondComponentComponent,
    CommonModule
  ],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
     public employeeDetailsList : EmployeeDetails[] = [];
     public employeeDetails : EmployeeDetails = new EmployeeDetails(); 


     onSubmitClick(){
        console.log(this.employeeDetails);
        this.employeeDetailsList.push(this.employeeDetails);
        this.employeeDetails = new EmployeeDetails();
        console.log(this.employeeDetailsList);        
     }

     onClearClick(){
      this.employeeDetails = new EmployeeDetails();
     }
}
