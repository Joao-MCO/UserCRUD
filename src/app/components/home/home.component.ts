import { Component } from '@angular/core';
import { TableComponent } from '../reusable/table/table.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, AddEmployeeComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  createWindow = false;
   onCreate(){
    this.createWindow = true;
   }

   onCancelEvent(){
    this.createWindow = false;
   }
}
