import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../reusable/button/button.component';
import { defaultUser, IUserRaw } from '../../utils/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.scss'
})
export class DeleteEmployeeComponent {
  constructor(private userService: UserService) {}

  buttonCancel = "CANCEL";
  buttonDelete = "DELETE"; 
  
  @Output() onCancel = new EventEmitter<any>();
  @Input() id = -1;
  user = defaultUser;
  title = "DELETE";
  onButtonClick(text:any){
    if(text === this.buttonDelete) this.userService.delete(this.id);
    this.onCancel.emit();
  }

  onSave(user:IUserRaw){
    this.user = user;
  }
}
