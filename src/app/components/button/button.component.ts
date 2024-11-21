import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text!: string; 
  @Input() textColor!: string; 
  @Input() textHoverColor?: string; 
  @Input() fillColor!: string; 
  @Input() outlineColor?: string; 
  @Input() type: string = 'button'; 
  @Input() disabled: boolean = false; 

  @Output() click = new EventEmitter<MouseEvent>()

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.click.emit(event);
    }
  }
}
