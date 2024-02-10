import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataMapperService {
    constructor() {}

    extractValueAndDate(data: any[]) {
        return data.map((e) => ({
            value: e.value,
            timeStamp: e.timeStamp,
        }));
    }

    findValuesFromDaysAgo(
        data: any[],
        desiredDays: string[],
        daysAgo: number[],
        key = 'value'
    ): any[] {
        const latestValue = data[data.length - 1][key];
        let res = [];
        for (let i in data) {
            const thatDate = this.parseDateToYYYYMMDD(new Date(data[i].timeStamp));
            if (desiredDays.includes(thatDate)) {
                const index = desiredDays.indexOf(thatDate);
                desiredDays = this.removeDateFromArray(desiredDays, thatDate, index);
                res.push(
                    this.mapToFinalForm(data[i], latestValue, daysAgo[index], key)
                );
            }
        }
        return res;
    }

    findDesiredDays(latestDate: Date, days: number[]): any[] {
        return days.map((day) => {
            const deep = new Date(latestDate);
            deep.setDate(deep.getDate() - day);
            return this.parseDateToYYYYMMDD(deep);
        });
    }

    private parseDateToYYYYMMDD(date: Date): string {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const res = `${year}/${month}/${day}`;
        return res;
    }

    private removeDateFromArray(arr: string[], el: string, index: number): string[] {
        arr.splice(index, 1);
        return arr;
    }

    private mapToFinalForm(
        e: any,
        latestValue: number,
        daysAgo: number,
        key = 'value'
    ) {
        return {
            valueChange: latestValue - e[key],
            percentageChange:
                this.calcPercentageChange(e[key], latestValue).toFixed(1) + '%',
            daysAgo,
            name: e.name,
        };
    }

    private calcPercentageChange(oldValue: any, newValue: any) {
        if (oldValue == undefined || newValue == undefined) return 0;
        return ((newValue - oldValue) / oldValue) * 100;
    }
}
