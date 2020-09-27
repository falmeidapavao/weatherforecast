import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { CityListComponent } from "./city-list/city-list.component";
import { StoreModule } from "@ngrx/store";
import * as fromHome from "./reducers/home.reducer";
import { EffectsModule } from "@ngrx/effects";
import { HomeEffects } from "./effects/home.effects";
import { CityCardComponent } from "./city-list/city-card/city-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [HomeComponent, CityListComponent, CityCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
})
export class HomeModule {}
