import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf, InputComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = "new Button";
  @Output() event = new EventEmitter<any>();

  onClick(){
    this.event.emit(this.text);
  }
}
