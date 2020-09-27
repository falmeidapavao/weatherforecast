import { Injectable } from "@angular/core";
import { WeatherService } from "@app/@core/services/weather.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import * as HomeActions from "../actions/home.actions";

@Injectable()
export class HomeEffects {
  getHomeCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.getHomeCities),
      mergeMap(({ cityIds }) =>
        this.weatherService
          .getGroupByIds(cityIds)
          .pipe(
            map(({ cnt, list }) =>
              HomeActions.getHomeCitiesSuccess({ cnt, list })
            )
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
