import { Component, Input } from '@angular/core';
import { EmployeeDetails } from '../../models/employeeModel';
import { CommonModule } from '@angular/common';     // responsible for providing *ngIf, *ngFor
import { MyEmployeeService } from '../../services/my-employee.service';


@Component({
  selector: 'app-second-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  //  @Input()                              // This decorator helps to take input from other component
  // employeeDetailsList: EmployeeDetails[] = []; // this way used when the load childComponet in a parentComponet


  employeeDetailsList: EmployeeDetails[] = [];
  
  constructor(private store: MyEmployeeService) {}


  ngOnInit(): void {
    this.employeeDetailsList = this.store.getEmployees();
  }


  editEmployee(index:number){
    console.log(this.employeeDetailsList[index])
  }

  deleteEmployee(index:number){
    console.log(this.employeeDetailsList[index]);
  }
}
