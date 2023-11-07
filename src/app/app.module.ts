import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleChartComponent } from './components/single-chart/single-chart.component';
import { PageAllChartsComponent } from './components/page-all-charts/page-all-charts.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import 'chartjs-adapter-luxon';

@NgModule({
    declarations: [AppComponent, SingleChartComponent, PageAllChartsComponent],
    imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, ChartModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
