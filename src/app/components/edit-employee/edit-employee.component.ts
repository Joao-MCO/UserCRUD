import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponent } from '../reusable/form/form.component';
import { ButtonComponent } from '../reusable/button/button.component';
import { UserService } from '../../services/user.service';
import { IUserRaw, defaultUser } from '../../utils/user';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormComponent, ButtonComponent],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent {
  constructor(private userService: UserService) {}
  
  buttonSave: string = "SALVAR";
  buttonCancel: string = "CANCELAR";
  @Output() onCancel = new EventEmitter<any>();
  @Input() id = -1;
  user = defaultUser;
  title = "UPDATE";
  onButtonClick(text:any){
    if(text === this.buttonSave) this.userService.update(this.id, this.user);
    this.onCancel.emit();
  }

  onSave(user:IUserRaw){
    this.user = user;
  }
}
