import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
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
      'Tue',
      'https://img.icons8.com/?size=128&id=5wSfjHD2HPMD&format=png',
      32,
      20,
      10
    ),
  ];

  constructor() {}

  getCardsData(): Card[] {
    return this.cards.slice();
  }
}
