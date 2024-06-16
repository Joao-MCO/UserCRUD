import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.scss'
})
export class DeleteEmployeeComponent {
  @Input() id = -1;
}
