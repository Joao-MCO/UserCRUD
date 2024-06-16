import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { IUser } from '../../../interfaces/user';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtonComponent, InputComponent, NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  buttonSave: string = "SALVAR";
  buttonCancel: string = "CANCELAR";
  userTitles: string[] = ['NOME', 'EMAIL', 'TELEFONE'];
  addressTitles: string[] = ['RUA', 'BAIRRO', 'CIDADE', 'CEP', 'ESTADO']
  user: IUser = {
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      neighborhood: '',
      cep: '',
      state: ''
    }
  };

  @Output() onCancel = new EventEmitter<any>();
  onButtonClick = (text: string) => {
    if(text === this.buttonCancel) this.onCancel.emit();
  };
}
