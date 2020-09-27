import { WeatherResponse } from "@app/@core/models/weather";
import { createAction, props } from "@ngrx/store";

const page = "[Home]";

export const getHomeCities = createAction(
  `${page} Get City List`,
  props<{ cityIds: number[] }>()
);

export const getHomeCitiesSuccess = createAction(
  `${page} Get City List Success`,
  props<{ cnt: number; list: WeatherResponse[] }>()
);
