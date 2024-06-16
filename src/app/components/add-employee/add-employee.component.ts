import { Component, EventEmitter, Output } from '@angular/core';
import { FormComponent } from '../reusable/form/form.component';
import { IUser } from '../../utils/user';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  @Output() onCancel = new EventEmitter<any>();
  title = "CREATE";
  onCancelClick(){
    this.onCancel.emit();
  }
}
