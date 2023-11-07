import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAllChartsComponent } from './components/page-all-charts/page-all-charts.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', component: PageAllChartsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
