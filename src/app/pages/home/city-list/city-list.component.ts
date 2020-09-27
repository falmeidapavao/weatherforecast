import { Component, OnInit } from "@angular/core";
import { WeatherResponse } from "@app/@core/models/weather";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectCities } from "../selectors/home.selectors";

@Component({
  selector: "app-city-list",
  templateUrl: "./city-list.component.html",
  styleUrls: ["./city-list.component.scss"],
})
export class CityListComponent implements OnInit {
  cities$: Observable<{ cnt: number; list: WeatherResponse[] }>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cities$ = this.store.pipe(select(selectCities));
  }
}
