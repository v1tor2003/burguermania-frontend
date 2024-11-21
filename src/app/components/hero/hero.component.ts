import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroImagePath: string = 'images/hero-img.png'

  constructor(private router: Router) {}
  
  goToOrder(): void {
    this.router.navigate(['/order'])
  }

  goToMenu(): void {
    this.router.navigate(['/menu'])
  }
}
