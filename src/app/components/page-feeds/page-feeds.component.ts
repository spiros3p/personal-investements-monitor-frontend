import { Component } from '@angular/core';
import { TableFeedsComponent } from '../table-feeds/table-feeds.component';
// import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-page-feeds',
    standalone: true,
    // providers: [MessageService],
    imports: [TableFeedsComponent],
    templateUrl: './page-feeds.component.html',
    styleUrl: './page-feeds.component.scss',
})
export class PageFeedsComponent {}
