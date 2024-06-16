import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() value = '';
  @Input() editable = true;
  text = '';
  @Input() title = '';
  @Output() inputEvent = new EventEmitter<any>();
  onEvent(){
    this.inputEvent.emit({key: this.title, value:this.text});
  }
}
