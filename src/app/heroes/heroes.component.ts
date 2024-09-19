import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  standalone: true,
  imports: [HeroDetailComponent, CommonModule, FormsModule, BrowserModule],
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls:['./heroes.component.scss'],
    //imports: []
})
export class HeroesComponent implements OnInit {
    selectedHero?: Hero;

    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.messageService.add(
            `HeroesComponent: Selected hero id=${hero.id}`
        );
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes) => (this.heroes = heroes));
    }
}