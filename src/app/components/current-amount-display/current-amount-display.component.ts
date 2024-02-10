import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-current-amount-display',
    templateUrl: './current-amount-display.component.html',
    styleUrls: ['./current-amount-display.component.scss'],
})
export class CurrentAmountDisplayComponent {
    @Input() currentAmountInEur = 0;
    @Input() currentValue = 0;
    @Input() options: any = {};

    get _currentAmountInEur() {
        return Number(this.currentAmountInEur).toFixed(2);
    }
}
