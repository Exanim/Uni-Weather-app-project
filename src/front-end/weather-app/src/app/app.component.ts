import { Component, OnInit } from '@angular/core';
import { CardDataService } from './card/card-data.service';
import { Card } from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Weather Webapp';
  cards?: Card[];
  city?: string;
  fetchedCityName?: string;

  ngOnInit(): void {
    this.cards = this.cardData.getCardsData();
  }

  constructor(private cardData: CardDataService) {}

  onLookUpCity() {
    console.log(this.city);
    this.fetchedCityName = this.city;
    this.city = '';
  }
}
