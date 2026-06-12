import { Component, Input } from '@angular/core';
import { EmployeeDetails } from '../../models/employeeModel';
import { CommonModule } from '@angular/common';     // responsible for providing *ngIf, *ngFor

@Component({
  selector: 'app-second-component',
  imports: [CommonModule],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
   @Input()                          // This decorator helps to take input from other component
  employeeDetailsList: EmployeeDetails[] = [];


  editEmployee(index:number){
    console.log(this.employeeDetailsList[index])
  }

  deleteEmployee(index:number){
    console.log(this.employeeDetailsList[index]);
  }
}
