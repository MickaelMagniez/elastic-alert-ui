import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Alert } from './alert';
// import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AlertService {

  private alertApiUrl = 'http://127.0.0.1:8080/alert';

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  getAlerts (): Observable<Alert[]> {
    return this.http.get<Alert[]>(this.alertApiUrl)
      .pipe(
        tap(alerts => this.log(`fetched alerts`)),
        catchError(this.handleError('getAlerts', []))
      );
  }

  getAlert (id: string): Observable<Alert> {
    return this.http.get<Alert>(this.alertApiUrl + '/' + id)
      .pipe(
        map(_alert => {
          const alert: Alert = _alert['alert'];
          alert.targets.emails = alert.targets.emails || [];
          return alert;
        }),
        tap(alert => this.log(`got alert`)),
        catchError(this.handleError('getAlert', null))
      );
  }

  deleteAlert (id: string): Observable<string> {
    return this.http.delete<string>(this.alertApiUrl + '/' + id)
      .pipe(
        tap(_ => this.log(`deleted alert`)),
        catchError(this.handleError('deleteAlert', ''))
      );
  }

  createAlert (alert: Alert): Observable<Alert> {
    return this.http.post<Alert>(this.alertApiUrl, alert, httpOptions)
      .pipe(
        tap(_ => this.log(`created alert`)),
        catchError(this.handleError('createAlert', null))
      );
  }

  updateAlert (alert: Alert): Observable<Alert> {
    return this.http.put<Alert>(this.alertApiUrl + '/' + alert.id, alert, httpOptions)
      .pipe(
        tap(_ => this.log(`updated alert`)),
        catchError(this.handleError('updateAlert', null))
      );
  }
  //
  // /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Data>(id: number): Observable<Hero> {
  //   const url = `${this.alertApiUrl}/?id=${id}`;
  //   return this.http.get<Hero[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Hero>(`getHero id=${id}`))
  //     );
  // }
  //
  // /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.alertApiUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }
  //
  // /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }
  //
  // //////// Save methods //////////
  //
  // /** POST: add a new hero to the server */
  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.alertApiUrl, hero, httpOptions).pipe(
  //     tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }
  //
  // /** DELETE: delete the hero from the server */
  // deleteHero (hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.alertApiUrl}/${id}`;
  //
  //   return this.http.delete<Hero>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }
  //
  // /** PUT: update the hero on the server */
  // updateHero (hero: Hero): Observable<any> {
  //   return this.http.put(this.alertApiUrl, hero, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
    console.log('HeroService: ' + message);
  }
}
