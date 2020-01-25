import { Component, OnInit } from '@angular/core';
import { NytimesService } from 'src/app/services/nytimes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newMovies: any[] = [];

  constructor(private nytimes: NytimesService) {
    this.nytimes.getNewReleases()
      .subscribe((data: any) => {
        console.log(data.results);
        this.newMovies = data;
      });
  }

  ngOnInit() {
  }

}
