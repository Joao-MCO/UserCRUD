import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { NgFor } from '@angular/common';
import { IUserRaw, defaultUser } from '../../../utils/user';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtonComponent, InputComponent, NgFor, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  userTitles: string[] = ['NOME', 'EMAIL', 'TELEFONE'];
  addressTitles: string[] = ['RUA', 'BAIRRO', 'CIDADE', 'CEP', 'ESTADO']
  @Output() userInfo = new EventEmitter<any>();
  @Input() id = -1;
  @Input() user = defaultUser;
  @Input() editable = true;
  onInputChange(info:any){
    if(info.key === this.userTitles[0]) this.user.name = info.value;
    if(info.key === this.userTitles[1]) this.user.email = info.value;
    if(info.key === this.userTitles[2]) this.user.phone = info.value;
    
    if(info.key === this.addressTitles[0]) this.user.address.street = info.value;
    if(info.key === this.addressTitles[1]) this.user.address.neighborhood = info.value;
    if(info.key === this.addressTitles[2]) this.user.address.city = info.value;
    if(info.key === this.addressTitles[3]) this.user.address.cep = info.value;
    if(info.key === this.addressTitles[4]) this.user.address.state = info.value;
    this.userInfo.emit(this.user);
  }
}
