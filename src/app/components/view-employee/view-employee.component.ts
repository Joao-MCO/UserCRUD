import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponent } from '../reusable/form/form.component';
import { ButtonComponent } from '../reusable/button/button.component';
import { UserService } from '../../services/user.service';
import { defaultUser } from '../../utils/user';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [FormComponent, ButtonComponent],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.scss'
})
export class ViewEmployeeComponent {  
  buttonCancel: string = "X";
  @Output() onCancel = new EventEmitter<any>();
  @Input() id = -1;
  @Input() user = defaultUser;
  editable = false;
  title = "VIEW";
  onButtonClick(text:any){
    this.onCancel.emit();
  }
}
