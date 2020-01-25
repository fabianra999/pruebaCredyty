import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NytimesService {

  constructor(private http: HttpClient) {
  }

  /* 
  * getQuery();
  * Obtener consulta.
  */
  getQuery(query: string) {
    const headers = new HttpHeaders({
      'api-key': 'Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu'
    });
    const url: string = `https://api.nytimes.com/svc/movies/v2/reviews/${query}`;
    return this.http.get(url);
  }

  /* 
  * getNewReleases();
  * Obtener lista de películas.
  */
  getNewReleases() {
    return this.getQuery('search.json?api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu')
      .pipe(map((data: any) => {
        return data.results;
      }));
  }

  /* 
  * getSearchMovie();
  * Buscar y obtener película por nombre.
  */
  getSearchMovie(searchData: string) {
    return this.getQuery(`search.json?query=${searchData}&api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu`)
      .pipe(map(data => data['results']));
  }

}
