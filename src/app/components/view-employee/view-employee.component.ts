import { Component } from '@angular/core';
import { FormComponent } from '../reusable/form/form.component';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.scss'
})
export class ViewEmployeeComponent {

}
