import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  constructor(private router: ActivatedRoute, public dataService: DataService) { 

  }


  ngOnInit() {
  }

}
