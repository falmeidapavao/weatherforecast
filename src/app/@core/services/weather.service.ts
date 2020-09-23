import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WeatherReponse } from "../models/weather";
import * as R from "ramda";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private baseUrl: string = "api.openweathermap.org/data/2.5";
  private apiKey: string = "3f4afdb33e8a37c529e3857e0ab64964";

  constructor(private http: HttpClient) {}

  getByCityName(name: string): Observable<WeatherReponse> {
    const url = `${this.baseUrl}/weather?q=${name}&appid=${this.apiKey}`;
    return this.http.get<WeatherReponse>(url);
  }

  getById(id: number): Observable<WeatherReponse> {
    const url = `${this.baseUrl}/weather?id=${id}&appid=${this.apiKey}`;
    return this.http.get<WeatherReponse>(url);
  }

  getGroupByIds(
    ids: number[]
  ): Observable<{ cnt: number; list: WeatherReponse[] }> {
    const url = `${this.baseUrl}/group?id=${R.join(",", ids)}&appid=${
      this.apiKey
    }`;
    return this.http.get<{ cnt: number; list: WeatherReponse[] }>(url);
  }
}
