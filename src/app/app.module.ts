import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HighchartsChartModule} from 'highcharts-angular';
import { CountryWiseComponent } from './components/country-wise/country-wise.component';
import { WorldWideComponent } from './components/world-wide/world-wide.component';
import { HttpClientModule } from '@angular/common/http';

import { GoogleChartsModule } from 'angular-google-charts';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    AppComponent,
    CountryWiseComponent,
    WorldWideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    NgApexchartsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
