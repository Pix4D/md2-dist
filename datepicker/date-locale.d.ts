/** Date locale info. TODO(mmalerba): Integrate with i18n solution once we know what we're doing. */
export declare class DateLocale {
    firstDayOfWeek: number;
    months: {
        full: string;
        short: string;
    }[];
    days: {
        full: string;
        short: string;
        xshort: string;
    }[];
    getDays(): {
        full: string;
        short: string;
        xshort: string;
    }[];
    getDayLabel(d: number): string;
    getDateLabel(d: Date): string;
    getMonthLabel(m: number, y: number): string;
    getYearLabel(y: number): string;
}
