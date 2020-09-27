import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { WeatherResponse } from "@app/@core/models/weather";
import { faTint, faWind, faCloud } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-city-card",
  templateUrl: "./city-card.component.html",
  styleUrls: ["./city-card.component.scss"],
})
export class CityCardComponent implements OnInit {
  faTint = faTint;
  faWind = faWind;
  faCloud = faCloud;

  @Input() city: WeatherResponse;

  constructor() {}

  ngOnInit(): void {}
}
