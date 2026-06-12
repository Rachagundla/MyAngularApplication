import { Component } from '@angular/core';
import { EmployeeDetails } from '../../models/employeeModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [
    FormsModule
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
        console.log(this.employeeDetailsList);        
     }
}
