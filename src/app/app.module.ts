import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleChartComponent } from './components/single-chart/single-chart.component';
import { PageAllChartsComponent } from './components/page-all-charts/page-all-charts.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { HttpRequestInterceptor } from './interceptors/http.interceptor';
import { LoginComponent } from './components/login/login.component';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import 'chartjs-adapter-luxon';

@NgModule({
    declarations: [
        AppComponent,
        SingleChartComponent,
        PageAllChartsComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        ChartModule,
        ToastModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
