import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  viewButton = "VIEW";
  updateButton = "UPDATE";
  deleteButton = "DELETE";
  constructor(private userService:UserService){}
  @Output() viewComponent = new EventEmitter<any>();
  @Output() updateComponent = new EventEmitter<any>();
  @Output() deleteComponent = new EventEmitter<any>();
  database = this.userService.list();
  eventManager(text:string, id:number){
    console.log(id);
    if(text === this.viewButton) this.viewComponent.emit(id);
    else if(text === this.updateButton) this.updateComponent.emit(id);
    else if(text === this.deleteButton) this.deleteComponent.emit(id);
  }
}
