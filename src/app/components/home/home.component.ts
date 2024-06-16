import { Component } from '@angular/core';
import { TableComponent } from '../reusable/table/table.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../reusable/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, AddEmployeeComponent, NgIf, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  createWindow = false;
  createUser = "Criar Usuário"
   onCreateEvent(text:any){
    this.createWindow = true;
   }

   onCancelEvent(){
    this.createWindow = false;
   }
}
