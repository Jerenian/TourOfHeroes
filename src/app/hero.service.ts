import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-herors';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(private http: HttpClient ,private messageService: MessageService) {}

    private heroesUrl = 'api/heroes';  // URL to web api

/** GET heroes from the server */
    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(catchError(error => of(error)))
    }
    /** GET hero by id. Will 404 if id not found */
    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url).pipe(
            catchError(error => of(error))
        );
    }
    /** PUT: update the hero on the server */
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };
    updateHero(hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
            (catchError(error => of(error)))
        );
    }
    /** POST: add a new hero to the server */
    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
            (catchError(error => of(error)))
        );
    }
    /** DELETE: delete the hero from the server */
    deleteHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
    
        return this.http.delete<Hero>(url, this.httpOptions).pipe(
            (catchError(error => of(error)))
        );
    }
    /* GET heroes whose name contains search term */
    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
        }
        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
    }
}