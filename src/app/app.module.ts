import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentComponent } from './components/currentWeather/currentWeather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { weatherRouting } from './weather.routing';
import { WeatherService } from './services/weather.service';
import { ResolveLocationService } from './services/resolve-location.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    ForecastComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    weatherRouting,
    ReactiveFormsModule
  ],
  providers: [WeatherService, ResolveLocationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
