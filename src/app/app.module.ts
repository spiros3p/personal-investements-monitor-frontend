import { NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';

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
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
