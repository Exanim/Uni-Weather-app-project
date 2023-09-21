import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  cityName: string = '';

  apiKey = '8d9445cab37f8906d9588c8b9977dd08';
  geoLocatorUrl = '';

  getGeoLocationByCityName(cityName: string) {
    this.cityName = cityName;
    this.geoLocatorUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&appid=${this.apiKey}`;
    this.http.get(this.geoLocatorUrl).subscribe((response) => {
      console.log(response);
    });
  }
}
