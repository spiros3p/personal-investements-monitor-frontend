import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-total-eur-amounts-bar',
    templateUrl: './total-eur-amounts-bar.component.html',
    styleUrls: ['./total-eur-amounts-bar.component.scss'],
})
export class TotalEurAmountsBarComponent {
    @Input() totalEurFromCrypto: any = {};
}
