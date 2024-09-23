import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
  ) {}

  ngOnInit(): void {
      this.getHero();
  }

  getHero(): void {
      const id = Number(
          this.route.snapshot.paramMap.get('id')
      );
      this.heroService
          .getHero(id)
          .subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
      this.location.back();
  }
}