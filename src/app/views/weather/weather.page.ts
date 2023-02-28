import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/serviceWeather/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  weatherData: any;
  location: any;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.findWeatherRd().subscribe((data:any) => {
      this.weatherData = data;
      console.log(this.weatherData);
    }, (error:any) => {
      console.log('Error getting weather data', error);
    });
  }

}
