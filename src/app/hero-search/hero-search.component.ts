import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
    debounceTime,
    distinctUntilChanged,
    switchMap,
} from 'rxjs/operators';
import { RouterLink } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.scss'
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
      this.searchTerms.next(term);
  }
  
  ngOnInit(): void {
      this.heroes$ = this.searchTerms.pipe(
          // wait 300ms after each keystroke before considering the term
          debounceTime(300),

          // ignore new term if same as previous term
          distinctUntilChanged(),

          // switch to new search observable each time the term changes
          switchMap((term: string) =>
              this.heroService.searchHeroes(term)
          )
      );
      this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),
    
        // ignore new term if same as previous term
        distinctUntilChanged(),
    
        // switch to new search observable each time the term changes
        switchMap((term: string) =>
            this.heroService.searchHeroes(term)
        )
    );
  }
}