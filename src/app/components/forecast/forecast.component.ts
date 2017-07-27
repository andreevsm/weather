import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/Rx';

import { Forecast } from '../../classes/forecast';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css', './media.css']
})
export class ForecastComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  forecastForm: FormGroup;
  cityForecast: Forecast[] = [];

  ngOnInit() {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')
    })
  }

  onSubmit() {
    this.cityForecast.splice(0, this.cityForecast.length);
    this.weatherService.fiveDayForecast(this.forecastForm.value.forecastCity).subscribe(
      (data) => {

        for (let i = 0; i < data.list.length; i += 8) {
          const temporary = new Forecast(data.list[i].dt_txt,
            data.list[i].main.temp)
          this.cityForecast.push(temporary);
        }
      }
    );
  }
}
