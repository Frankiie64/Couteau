import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Dominican%20Republic&appid=9973477d4c9eae6f1269e68a40a95cdc';

  constructor(private http: HttpClient) { }

  findWeatherRd() {
    return this.http.get(`${this.apiUrl}`);
  }
}
