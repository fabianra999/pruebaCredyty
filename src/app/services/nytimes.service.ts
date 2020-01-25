import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NytimesService {

  constructor(private http: HttpClient) {
    console.log(' yeaaaa ');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'api-key': 'Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu'
    });
    const url: string = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu';

    return this.http.get(url);
  }

  getSearchMovie(searchData: string) {
    const headers = new HttpHeaders({
      'api-key': 'Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu'
    });
    const url: string = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchData}&api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu`;

    return this.http.get(url);
  }

}
