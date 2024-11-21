import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ButtonComponent } from "../../components/button/button.component";
import { Category, Hamburger } from '../../types';
import { HamburguerService } from '../../services/hamburguer.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  private menuIsExpanded: boolean = false;  
  buttonText: string = '';
  categories: Category[] = []
  selectedCategory: string = '';
  hamburguers: Hamburger[] = [];
  SHOW_MORE_TEXT: string = 'Ver categoria completa';
  SHOW_LESS_TEXT: string = 'Ver menos';

  constructor(
    private router: Router,
    private hamburguerService: HamburguerService
  ) {}

  ngOnInit(): void {
    this.buttonText = this.SHOW_MORE_TEXT
    this.loadCategories();
  }

  loadCategories(): void {
    this.hamburguerService.getCategories().subscribe(data => {
      this.categories = data;
      if (this.categories.length > 0) {
        this.selectedCategory = this.categories[0].id; 
        this.loadHamburgersByCategory(this.selectedCategory);
      }
    });
  }

  loadHamburgersByCategoryLimited(categoryId: string): void {
    this.hamburguerService.getHamburgersByCategory(categoryId).subscribe(data => {
      this.hamburguers = data.slice(0, 3);
    });
  }

  loadHamburgersByCategory(categoryId: string): void {
    this.hamburguerService.getHamburgersByCategory(categoryId).subscribe(data => {
      this.hamburguers = data;
    });
  }

  toggleMenuItemsVisualization(event: MouseEvent, categoryId: string): void {
    console.log(this.menuIsExpanded)
    event.stopPropagation()
    if(!this.menuIsExpanded){
      this.loadHamburgersByCategory(categoryId);
      this.buttonText = this.SHOW_LESS_TEXT;
    }else {
      this.loadHamburgersByCategoryLimited(categoryId);
      this.buttonText = this.SHOW_MORE_TEXT;
    }

    this.menuIsExpanded = !this.menuIsExpanded;
  }

  goToDetails(id: string): void {
    this.router.navigate(['/details', id])
  }
}
