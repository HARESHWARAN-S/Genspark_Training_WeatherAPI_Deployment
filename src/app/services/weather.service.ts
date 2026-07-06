import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl =
    'https://sampleapi20260706g3-bvdacte9b0dvhudv.canadacentral-01.azurewebsites.net/Weatherforecast';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.apiUrl);
  }
}