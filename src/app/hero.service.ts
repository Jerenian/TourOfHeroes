import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-herors';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(private http: HttpClient ,private messageService: MessageService) {}

    private heroesUrl = 'api/heroes';  // URL to web api

/** GET heroes from the server */
getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
        catchError(this.handleError<any>('getHeroes', []))
      );
  }
    getHero(id: number): Observable<Hero> {
        const hero = HEROES.find(h => h.id === id)!;
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(hero);
    }
}