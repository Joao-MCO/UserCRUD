import { Component, EventEmitter, Output } from '@angular/core';
import { FormComponent } from '../reusable/form/form.component';
import { IUser, IUserRaw, defaultUser } from '../../utils/user';
import { ButtonComponent } from '../reusable/button/button.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormComponent, ButtonComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  constructor(private userService: UserService) {}
  
  buttonSave: string = "SALVAR";
  buttonCancel: string = "CANCELAR";
  
  @Output() onCancel = new EventEmitter<any>();
  title = "CREATE";
  user = defaultUser;
  onButtonClick(text:any){
    if(text === this.buttonSave) this.userService.create(this.user);
    this.onCancel.emit();
  }

  onSave(user:IUserRaw){
    this.user = user;
  }
}
