var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, } from '@angular/core';
/** Date locale info. TODO(mmalerba): Integrate with i18n solution once we know what we're doing. */
var DateLocale = (function () {
    function DateLocale() {
        this.firstDayOfWeek = 0;
        this.months = [
            { full: 'January', short: 'Jan' },
            { full: 'February', short: 'Feb' },
            { full: 'March', short: 'Mar' },
            { full: 'April', short: 'Apr' },
            { full: 'May', short: 'May' },
            { full: 'June', short: 'Jun' },
            { full: 'July', short: 'Jul' },
            { full: 'August', short: 'Aug' },
            { full: 'September', short: 'Sep' },
            { full: 'October', short: 'Oct' },
            { full: 'November', short: 'Nov' },
            { full: 'December', short: 'Dec' },
        ];
        this.days = [
            { full: 'Sunday', short: 'Sun', xshort: 'S' },
            { full: 'Monday', short: 'Mon', xshort: 'M' },
            { full: 'Tuesday', short: 'Tue', xshort: 'T' },
            { full: 'Wednesday', short: 'Wed', xshort: 'W' },
            { full: 'Thursday', short: 'Thu', xshort: 'T' },
            { full: 'Friday', short: 'Fri', xshort: 'F' },
            { full: 'Saturday', short: 'Sat', xshort: 'S' },
        ];
    }
    DateLocale.prototype.getDays = function () {
        return this.days.slice(this.firstDayOfWeek, this.days.length)
            .concat(this.days.slice(0, this.firstDayOfWeek));
    };
    DateLocale.prototype.getDayLabel = function (d) { return "" + d; };
    DateLocale.prototype.getDateLabel = function (d) {
        return this.days[d.getDay()].short + ", " + this.months[d.getMonth()].short + " " + d.getDate();
    };
    DateLocale.prototype.getMonthLabel = function (m, y) { return this.months[m].full + " " + y; };
    DateLocale.prototype.getYearLabel = function (y) { return "" + y; };
    return DateLocale;
}());
DateLocale = __decorate([
    Injectable()
], DateLocale);
export { DateLocale };
//# sourceMappingURL=date-locale.js.map