import { EventEmitter, Injectable } from '@angular/core';
import { Card } from './card.model';
import { Weather } from '../shared/weather.model';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  onWeatherChanged = new EventEmitter<Card[]>();

  cards: Card[] = [
    new Card(
      'Mon',
      'https://img.icons8.com/?size=128&id=5wSfjHD2HPMD&format=png',
      25,
      50,
      10
    ),
    new Card(
      'Tue',
      'https://img.icons8.com/?size=128&id=5wSfjHD2HPMD&format=png',
      32,
      20,
      10
    ),
    new Card(
      'Tue',
      'https://img.icons8.com/?size=128&id=5wSfjHD2HPMD&format=png',
      32,
      20,
      10
    ),
    new Card(
      'Tue',
      'https://img.icons8.com/?size=128&id=5wSfjHD2HPMD&format=png',
      32,
      20,
      10
    ),
    new Card(
      '',
      '',
      32,
      20,
      10
    ),
  ];

  constructor() {}

  getCardsData(): Card[] {
    return this.cards.slice();
  }

  switchDayOfWeek(weather: Weather[], i: number): string {
    const dateObject = new Date(weather[i].dt_txt);
    let dayOfWeek: string;
    switch (dateObject.getDay().toString()) {
      case '0':
        dayOfWeek = 'Vas';
        break;
      case '1':
        dayOfWeek = 'Hét';
        break;
      case '2':
        dayOfWeek = 'Kedd';
        break;
      case '3':
        dayOfWeek = 'Szer';
        break;
      case '4':
        dayOfWeek = 'Csüt';
        break;
      case '5':
        dayOfWeek = 'Pén';
        break;
      case '6':
        dayOfWeek = 'Szom';
        break;
      default:
        dayOfWeek = 'Érvénytelen nap';
    }
    return dayOfWeek;
  }

  switchPictureUrl(descriptionOfWeatherCondition: string){
    let url: string;
    switch (descriptionOfWeatherCondition){
      case 'Thunderstorm':
        url = 'https://img.icons8.com/?size=256&id=DlsFhDMp4rhs&format=png'
        break;
      case 'Drizzle':
        url = 'https://img.icons8.com/?size=256&id=kKxyuLXD4w0n&format=png'
        break;
      case 'Rain':
        url = 'https://img.icons8.com/?size=256&id=MVj2tmasj0Pp&format=png'
        break;
      case 'Snow':
        url = 'https://img.icons8.com/?size=256&id=cyZConbteZk9&format=png'
        break;
      case 'Atmosphere':
        url = 'https://img.icons8.com/?size=256&id=qHIFUjYhnsFU&format=png'
        break;
      case 'Clear':
        url = 'https://img.icons8.com/?size=256&id=8EUmYhfLPTCF&format=png'
        break;
      case 'Clouds':
        url = 'https://img.icons8.com/?size=256&id=zIVmoh4T8wh7&format=png'
        break;
      default:
        url = 'https://img.icons8.com/?size=256&id=FUE6kv9VAyGB&format=png'
    }
    return url;
  }

  setCardsData(weather: Weather[]): void {
    for (let i = 0; i < this.cards.length && i < weather.length; i++) {
      let dayOfWeek = this.switchDayOfWeek(weather, i)
      this.cards[i].imgSrc = this.switchPictureUrl(weather[i].weather);
      this.cards[i].day = dayOfWeek;
      this.cards[i].humidity = weather[i].humidity;
      this.cards[i].temperature = weather[i].temp - 273.15;
      this.cards[i].windSpeed = weather[i].windSpeed;
    }
    this.onWeatherChanged.next(this.cards);
  }
}
