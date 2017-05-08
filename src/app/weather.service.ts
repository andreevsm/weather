import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import{ Forecast } from './forecast';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class WeatherService {
myWeather:CurrentWeather;
  location
  constructor(private http:Http) {}
//определение местонахождения
localWeather(){
  return new Promise ((res, rej) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=e3d0580967f4068072992224be8a3c9c&units=metric').map((response:Response) =>response.json()).toPromise().then((data) => {
        
        this.myWeather = new CurrentWeather(data.name, 
                                        data.main.temp,
                                        data.weather[0].description);
        res(this.myWeather);
      }
      )

    })
  })
}
anotherCityWeather(city:string){
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e3d0580967f4068072992224be8a3c9c&units=metric').map((response:Response) => response.json());
}

fiveDayForecast(city:string){
  return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=e3d0580967f4068072992224be8a3c9c&units=metric').map((response:Response) => response.json());
}
}
