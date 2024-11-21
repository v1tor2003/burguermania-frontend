import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { Hamburger } from '../../types';
import { HamburguerService } from '../../services/hamburguer.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent, CommonModule, CardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  private menuIsExpanded: boolean = false;
  menuButtonText: string = '';
  SHOW_MORE_TEXT: string = 'Ver cardápio completo';
  SHOW_LESS_TEXT: string = 'Ver menos';
  hamburguers: Hamburger[] = [];

  constructor(
    private hamburguerService: HamburguerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuButtonText = this.SHOW_MORE_TEXT;
    this.loadLimitedInitialHamburguers();
  }

  toggleMenuItemsVisualization(event: MouseEvent): void {
    console.log(this.menuIsExpanded)
    event.stopPropagation()
    if(!this.menuIsExpanded){
      this.loadAllHamburguers();
      this.menuButtonText = this.SHOW_LESS_TEXT;
    }else {
      this.loadLimitedInitialHamburguers();
      this.menuButtonText = this.SHOW_MORE_TEXT;
    }

    this.menuIsExpanded = !this.menuIsExpanded;
  }

  loadLimitedInitialHamburguers(): void {
    this.hamburguerService.getHamburgers().subscribe(data => {
      this.hamburguers = data.slice(0, 3);
    });
  }

  loadAllHamburguers(): void {
    this.hamburguerService.getHamburgers().subscribe(data => {
      this.hamburguers = data;
    })
  }

  goToDetails(id: string): void {
    this.router.navigate(['/details', id])
  }
}
