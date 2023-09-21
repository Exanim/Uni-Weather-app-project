import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  cityName: string = '';

  apiKey = '8d9445cab37f8906d9588c8b9977dd08';
  geoLocatorUrl = '';
  fiveDaysForeCastUrl = '';
  lat = 0;
  lon = 0;

  getGeoLocationByCityName(cityName: string) {
    this.cityName = cityName;
    this.geoLocatorUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&appid=${this.apiKey}`;
    this.http
      .get<{ lat: number; lon: number }[]>(this.geoLocatorUrl)
      .pipe(
        map((response) => {
          if (response.length > 0) {
            const { lat, lon } = response[0];
            return { lat, lon };
          } else {
            throw new Error('Nincs válasz a városra');
          }
        })
      )
      .subscribe((filteredData) => {
        this.lat = filteredData.lat;
        this.lon = filteredData.lon;
        console.log(this.lat);
        console.log(this.lon);
      });
  }
}
