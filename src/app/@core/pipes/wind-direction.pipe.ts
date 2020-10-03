import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "windDirection",
})
export class WindDirectionPipe implements PipeTransform {
  transform(degrees: number): unknown {
    return degrees > 348.75 || degrees <= 11.25
      ? "N"
      : degrees > 11.25 && degrees <= 33.75
      ? "NNE"
      : degrees > 33.75 && degrees <= 56.25
      ? "NE"
      : degrees > 56.25 && degrees <= 78.75
      ? "ENE"
      : degrees > 78.75 && degrees <= 101.25
      ? "E"
      : degrees > 101.25 && degrees <= 123.75
      ? "ESE"
      : degrees > 123.75 && degrees <= 146.25
      ? "SE"
      : degrees > 146.25 && degrees <= 168.75
      ? "SSE"
      : degrees > 168.75 && degrees <= 191.25
      ? "S"
      : degrees > 191.25 && degrees <= 213.75
      ? "SSW"
      : degrees > 213.75 && degrees <= 236.25
      ? "SW"
      : degrees > 236.25 && degrees <= 258.75
      ? "WSW"
      : degrees > 258.75 && degrees <= 281.25
      ? "W"
      : degrees > 281.25 && degrees <= 303.75
      ? "WNW"
      : degrees > 303.75 && degrees <= 326.25
      ? "NW"
      : degrees > 326.25 && degrees <= 348.75
      ? "NNW"
      : "";
  }
}
