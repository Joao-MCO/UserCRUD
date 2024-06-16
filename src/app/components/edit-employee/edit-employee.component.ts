import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponent } from '../reusable/form/form.component';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent {
  @Output() onCancel = new EventEmitter<any>();
  @Input() id = -1;
  title = "UPDATE";
  onCancelClick(){
    this.onCancel.emit();
  }
}
