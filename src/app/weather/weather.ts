import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.css']
})
export class WeatherComponent implements OnInit {

  weatherData: Weather[] = [];
  loading = true;
  error = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
  console.log("Component loaded");

  this.weatherService.getWeather().subscribe({
    next: (data) => {
      console.log("Received:", data);

      this.weatherData = data;
      this.loading = false;

      console.log("Loading :", this.loading);
    },
    error: (err) => {
      console.error(err);

      this.loading = false;
      this.error = "Failed to load weather data.";
    }
  });
}
}