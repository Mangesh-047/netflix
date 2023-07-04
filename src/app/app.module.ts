import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { MovieDashboardComponent } from './shared/components/movie-dashboard/movie-dashboard.component';
import { MainSliderComponent } from './shared/components/main-slider/main-slider.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieDashboardComponent,
    MainSliderComponent,
    NavbarComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
