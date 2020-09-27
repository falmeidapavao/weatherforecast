import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getHomeCities } from "./actions/home.actions";
import { DateTime } from "luxon";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  today: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.today = DateTime.local().toLocaleString(DateTime.DATE_MED);

    this.store.dispatch(
      getHomeCities({ cityIds: [2267057, 2735943, 2759794] })
    );
  }
}
