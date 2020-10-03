import { Injectable } from "@angular/core";
import { WeatherService } from "@app/@core/services/weather.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import * as HomeActions from "../actions/home.actions";

@Injectable()
export class HomeEffects {
  getHomeCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.getHomeCities),
      mergeMap(({ cityIds }) =>
        /*this.weatherService
          .getGroupByIds(cityIds)
          .pipe(
            map(({ cnt, list }) =>
              HomeActions.getHomeCitiesSuccess({ cnt, list })
            )
          )*/
        of(
          HomeActions.getHomeCitiesSuccess({
            cnt: 3,
            list: JSON.parse(
              '[{"coord":{"lon":-9.13,"lat":38.72},"sys":{"country":"PT","timezone":3600,"sunrise":1601706863,"sunset":1601748976},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"main":{"temp":15.69,"feels_like":14.68,"temp_min":15,"temp_max":16.11,"pressure":1015,"humidity":82},"visibility":10000,"wind":{"speed":2.6,"deg":230},"clouds":{"all":20},"dt":1601763046,"id":2267057,"name":"Lisbon"},{"coord":{"lon":-8.61,"lat":41.15},"sys":{"country":"PT","timezone":3600,"sunrise":1601706801,"sunset":1601748789},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"main":{"temp":13.51,"feels_like":11.78,"temp_min":13.33,"temp_max":14,"pressure":1013,"humidity":87},"visibility":10000,"wind":{"speed":3.1,"deg":190},"clouds":{"all":20},"dt":1601763064,"id":2735943,"name":"Porto"},{"coord":{"lon":4.89,"lat":52.37},"sys":{"country":"NL","timezone":7200,"sunrise":1601790419,"sunset":1601831454},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"main":{"temp":10.22,"feels_like":6.82,"temp_min":10,"temp_max":10.56,"pressure":987,"humidity":93},"visibility":10000,"wind":{"speed":4.6,"deg":130},"clouds":{"all":54},"dt":1601763066,"id":2759794,"name":"Amsterdam"}]'
            ),
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
