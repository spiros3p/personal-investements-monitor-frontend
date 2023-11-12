import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-rates-display-bar',
    templateUrl: './rates-display-bar.component.html',
    styleUrls: ['./rates-display-bar.component.scss'],
})
export class RatesDisplayBarComponent {
    @Input() data: any = [];
}
