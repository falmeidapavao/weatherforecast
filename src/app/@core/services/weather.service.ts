import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WeatherResponse } from "../models/weather";
import * as R from "ramda";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private baseUrl: string = "http://api.openweathermap.org/data/2.5";
  private apiKey: string = "3f4afdb33e8a37c529e3857e0ab64964";

  constructor(private http: HttpClient) {}

  getByCityName(name: string): Observable<WeatherResponse> {
    const url = `${this.baseUrl}/weather?q=${name}&appid=${this.apiKey}`;
    return this.http.get<WeatherResponse>(url);
  }

  getById(id: number): Observable<WeatherResponse> {
    const url = `${this.baseUrl}/weather?id=${id}&appid=${this.apiKey}`;
    return this.http.get<WeatherResponse>(url);
  }

  getGroupByIds(
    cityIds: number[]
  ): Observable<{ cnt: number; list: WeatherResponse[] }> {
    const url = `${this.baseUrl}/group?id=${R.join(
      ",",
      cityIds
    )}&units=metric&appid=${this.apiKey}`;
    return this.http.get<{ cnt: number; list: WeatherResponse[] }>(url);
  }
}
