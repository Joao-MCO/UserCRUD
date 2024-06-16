import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
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

  database = this.userService.list();
}
