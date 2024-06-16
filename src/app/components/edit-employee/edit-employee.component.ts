import { Component } from '@angular/core';
import { FormComponent } from '../reusable/form/form.component';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent {

}
