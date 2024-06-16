import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  text = '';
  @Input() title = '';
  @Output() inputEvent = new EventEmitter<any>();

  onEvent(){
    this.inputEvent.emit({key: this.title, value:this.text});
  }
}
