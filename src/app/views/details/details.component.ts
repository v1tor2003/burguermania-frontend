import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hamburger } from '../../types';
import { HamburguerService } from '../../services/hamburguer.service';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardComponent, CommonModule, ButtonComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  hamburguer!: Hamburger;

  constructor(
    private hamburguerService: HamburguerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    console.log(id);
    this.loadHamburguer(id);
    console.log(this.hamburguer)
  }

  loadHamburguer(id: string): void {
    this.hamburguerService.getHamburgerById(id).subscribe(data => {

      this.hamburguer = data
    }
    )
  }
}
