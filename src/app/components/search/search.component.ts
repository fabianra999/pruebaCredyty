import { Component, OnInit } from '@angular/core';
import { NytimesService } from 'src/app/services/nytimes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchResults: any[] = [];
  constructor(private nytimes: NytimesService) { }
  searchMovie(searchData: string) {
    console.log(searchData);

    this.nytimes.getSearchMovie(searchData)
      .subscribe((data: any) => {
        console.log(data.results);
        this.searchResults = data.results;
      });
  }

  ngOnInit() {
  }

}
