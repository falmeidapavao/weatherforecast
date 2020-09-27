import { WeatherResponse } from "@app/@core/models/weather";
import { Action, createReducer, on } from "@ngrx/store";
import * as HomeActions from "../actions/home.actions";

export const homeFeatureKey = "home";

export interface State {
  cities?: { cnt: number; list: WeatherResponse[] };
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(HomeActions.getHomeCities, (state) => state),
  on(HomeActions.getHomeCitiesSuccess, (state, { cnt, list }) => ({
    ...state,
    cities: { cnt, list },
  }))
);
