import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { WeatherService } from '../../services/weather.service';
import { CurrentWeather } from '../../classes/current-weather';

@Component({
  selector: 'app-current',
  templateUrl: './currentWeather.component.html',
  styleUrls: ['./currentWeather.component.css', './media.css']
})
export class CurrentComponent implements OnInit {
  
  myWeather: CurrentWeather;

  constructor(private ws: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { myWeather: CurrentWeather }) => {
        this.myWeather = data.myWeather;
      }
    )
  }

  onSubmit(weatherForm: NgForm) {
    this.ws.anotherCityWeather(weatherForm.value.city).subscribe(
      (data) => {
        this.myWeather = new CurrentWeather(data.name,
          data.main.temp,
          data.weather[0].description);
      }
    )
  }
}
