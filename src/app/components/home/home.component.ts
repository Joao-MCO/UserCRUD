import { Component } from '@angular/core';
import { TableComponent } from '../reusable/table/table.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../reusable/button/button.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from '../view-employee/view-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { defaultUser } from '../../utils/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, AddEmployeeComponent, NgIf, ButtonComponent, EditEmployeeComponent, ViewEmployeeComponent, DeleteEmployeeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private userService: UserService) {}

  createWindow = false;
  updateWindow = false;
  viewWindow = false;
  deleteWindow = false;
  userId = -1;
  user = defaultUser;
  createUser = "Criar Usuário"

   onCreateEvent(text:any){
    this.createWindow = true;
    this.updateWindow = false;
    this.viewWindow = false;
    this.deleteWindow = false;
   }

   onUpdateEvent(id:any){
    this.updateWindow = true;
    this.createWindow = false;
    this.viewWindow = false;
    this.deleteWindow = false;
    this.userId = id;
   }

   onViewEvent(id:any){
    this.viewWindow = true;
    this.updateWindow = false;
    this.createWindow = false;
    this.deleteWindow = false;
    this.userId = id;
    this.user = this.userService.index(this.userId);
   }

   onDeleteEvent(id:any){
    this.viewWindow = false;
    this.updateWindow = false;
    this.createWindow = false;
    this.deleteWindow = true;
    this.userId = id;
   }

   onCancelEvent(){
    this.createWindow = false;
    this.updateWindow = false;
    this.viewWindow = false;
    this.deleteWindow = false;
   }
}
