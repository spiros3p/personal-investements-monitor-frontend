import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ItemFeedsComponent } from '../item-feeds/item-feeds.component';
import { FeedDataApiService } from 'src/app/services/feed-data-api/feed-data-api.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FeedData } from 'src/app/services/feed-data-api';

@Component({
    selector: 'app-table-feeds',
    standalone: true,
    imports: [ItemFeedsComponent, CommonModule],
    templateUrl: './table-feeds.component.html',
    styleUrl: './table-feeds.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFeedsComponent implements OnInit {
    readonly data$ = new BehaviorSubject<FeedData[]>([]);

    constructor(private feedService: FeedDataApiService) {}

    ngOnInit(): void {
        this.initData();
    }

    handleSubmit(feedData: FeedData) {
        const feedName = feedData.name;
        this.feedService.updateFeed(feedData).subscribe((v) => {
            if (v) {
                const feedList = this.data$.getValue();
                const i = feedList.findIndex((feed) => feed.name == feedName);
                feedList[i] = { value: v, name: feedName };
                this.data$.next(feedList);
            } else {
                // this.data$.next(this.data$.getValue());
            }
        });
    }

    byDataName(i: number, data: FeedData) {
        return data.name;
    }

    private initData() {
        this.feedService.listOfFeeds.forEach((feed) => {
            this.feedService.getFeed(feed).subscribe((v) => {
                this.data$.next([
                    ...this.data$.getValue(),
                    { name: feed, value: v as number },
                ]);
            });
        });
    }
}
