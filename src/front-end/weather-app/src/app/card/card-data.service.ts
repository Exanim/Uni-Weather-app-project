import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  cards: Card[] = [];

  constructor() { }
}
