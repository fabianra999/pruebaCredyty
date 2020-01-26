import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router, private dataService: DataService) {
   }


  seeReview(item: any) {
    let itemMovie = item.display_title.replace(/ /g, "-");
    console.log(item);
    console.log(itemMovie);

    this.router.navigate(['/movie', itemMovie]);
    this.dataService.itemMovie = item;
  }
  ngOnInit() {
  }

}
