import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title!: string;
  @Input() imagePath!: string;
  @Input() desc?: string;

  @Output() click = new EventEmitter<void>()
  onClick(): void {
    this.click.emit();
  }
}
