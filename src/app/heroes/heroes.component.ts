import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [HeroDetailComponent, CommonModule, FormsModule, RouterLink],
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls:['./heroes.component.scss'],
})

export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes) => (this.heroes = heroes));
    }
}