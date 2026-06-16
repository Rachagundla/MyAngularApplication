import { Injectable } from '@angular/core';
import { EmployeeDetails } from '../models/employeeModel';

@Injectable({
  providedIn: 'root'
})
export class MyEmployeeService {
  
  private employees: EmployeeDetails[] = [];
  constructor() { }

  addEmployee(emp: EmployeeDetails) {
    this.employees.push(emp);
  }

  getEmployees(): EmployeeDetails[] {
    return this.employees;
  }

  clear() {
    this.employees = [];
  }
}
