import { Component, OnInit } from '@angular/core';
import { CardDataService } from './card/card-data.service';
import { Card } from './card/card.model';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Weather Webapp';
  cards: Card[] = [];
  city = '';
  fetchedCityName?: string;
  showEachPack = false;
  formerCity = '';

  ngOnInit(): void {
    this.cards = this.cardData.getCardsData();
    this.cardData.onWeatherChanged.subscribe(
      (cardData) => (this.cards = cardData)
    );
    this.dataStorage.onFetchError.subscribe(
      (errorMessage) => (this.fetchedCityName = errorMessage)
    );
  }

  constructor(
    private cardData: CardDataService,
    private dataStorage: DataStorageService
  ) {}

  onLookUpCity() {
    if (this.formerCity !== this.city && this.city) {
      this.dataStorage.getGeoLocationByCityName(this.city);
      this.fetchedCityName = this.city;
      this.formerCity = this.city;
      this.city = '';
      this.showEachPack = !this.showEachPack;
    }
  }
}
