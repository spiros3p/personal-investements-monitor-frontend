import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    signal,
} from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FeedData } from 'src/app/services/feed-data-api';

@Component({
    selector: 'app-item-feeds',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        ButtonModule,
        InputNumberModule,
        ProgressSpinnerModule,
        CommonModule,
    ],
    templateUrl: './item-feeds.component.html',
    styleUrl: './item-feeds.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFeedsComponent {
    @Output() submitEvent = new EventEmitter<FeedData>();
    @Input() set feedData(d: FeedData) {
        this.loading.set(false);
        this.formGroup.controls.inputValue.reset();
        this._feedData = d;
    }
    private _feedData!: FeedData;
    get feedName() {
        return this._feedData.name;
    }
    get feedValue() {
        return this._feedData.value;
    }

    loading = signal<boolean>(false);

    formGroup = new FormGroup({
        inputValue: new FormControl<string | null>(null, [
            Validators.required,
            this.NaNValidator,
        ]),
    });

    onSubmit() {
        this.loading.set(true);
        const v = Number(this.formGroup.controls.inputValue.value);
        this.submitEvent.emit({ name: this.feedName, value: v });
    }

    private NaNValidator(control: AbstractControl) {
        if (Number.isNaN(control.value)) {
            return { errorNaN: true };
        }
        return null;
    }
}
