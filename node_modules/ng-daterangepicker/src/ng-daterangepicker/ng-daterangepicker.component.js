import { Component, HostListener, ElementRef, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dateFns from 'date-fns';
export var DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgDateRangePickerComponent; }),
    multi: true
};
var NgDateRangePickerComponent = (function () {
    function NgDateRangePickerComponent(elementRef) {
        this.elementRef = elementRef;
        this.defaultOptions = {
            theme: 'default',
            range: 'tm',
            dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
            dateFormat: 'yMd',
            outputFormat: 'DD/MM/YYYY',
            startOfWeek: 0
        };
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(NgDateRangePickerComponent.prototype, "value", {
        get: function () {
            return this.modelValue;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this.modelValue = value;
            this.onChangeCallback(value);
        },
        enumerable: true,
        configurable: true
    });
    NgDateRangePickerComponent.prototype.writeValue = function (value) {
        if (!value) {
            return;
        }
        this.modelValue = value;
    };
    NgDateRangePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    NgDateRangePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    NgDateRangePickerComponent.prototype.ngOnInit = function () {
        this.opened = false;
        this.date = dateFns.startOfDay(new Date());
        this.options = this.options || this.defaultOptions;
        this.initNames();
        this.selectRange(this.options.range);
    };
    NgDateRangePickerComponent.prototype.ngOnChanges = function (changes) {
        this.options = this.options || this.defaultOptions;
    };
    NgDateRangePickerComponent.prototype.initNames = function () {
        this.dayNames = this.options.dayNames;
    };
    NgDateRangePickerComponent.prototype.generateCalendar = function () {
        var _this = this;
        this.days = [];
        var start = dateFns.startOfMonth(this.date);
        var end = dateFns.endOfMonth(this.date);
        var days = dateFns.eachDay(start, end).map(function (d) {
            return {
                date: d,
                day: dateFns.getDate(d),
                weekday: dateFns.getDay(d),
                today: dateFns.isToday(d),
                firstMonthDay: dateFns.isFirstDayOfMonth(d),
                lastMonthDay: dateFns.isLastDayOfMonth(d),
                visible: true,
                from: dateFns.isSameDay(_this.dateFrom, d),
                to: dateFns.isSameDay(_this.dateTo, d),
                isWithinRange: dateFns.isWithinRange(d, _this.dateFrom, _this.dateTo)
            };
        });
        var prevMonthDayNum = dateFns.getDay(start) - 1;
        var prevMonthDays = [];
        if (prevMonthDayNum > 0) {
            prevMonthDays = Array.from(Array(prevMonthDayNum).keys()).map(function (i) {
                var d = dateFns.subDays(start, prevMonthDayNum - i);
                return {
                    date: d,
                    day: dateFns.getDate(d),
                    weekday: dateFns.getDay(d),
                    firstMonthDay: dateFns.isFirstDayOfMonth(d),
                    lastMonthDay: dateFns.isLastDayOfMonth(d),
                    today: false,
                    visible: false,
                    from: false,
                    to: false,
                    isWithinRange: false
                };
            });
        }
        this.days = prevMonthDays.concat(days);
        this.value = dateFns.format(this.dateFrom, this.options.outputFormat) + "-" + dateFns.format(this.dateTo, this.options.outputFormat);
    };
    NgDateRangePickerComponent.prototype.toggleCalendar = function (e, selection) {
        if (this.opened && this.opened !== selection) {
            this.opened = selection;
        }
        else {
            this.opened = this.opened ? false : selection;
        }
    };
    NgDateRangePickerComponent.prototype.closeCalendar = function (e) {
        this.opened = false;
    };
    NgDateRangePickerComponent.prototype.selectDate = function (e, index) {
        e.preventDefault();
        var selectedDate = this.days[index].date;
        if ((this.opened === 'from' && dateFns.isAfter(selectedDate, this.dateTo)) ||
            (this.opened === 'to' && dateFns.isBefore(selectedDate, this.dateFrom))) {
            return;
        }
        if (this.opened === 'from') {
            this.dateFrom = selectedDate;
            this.opened = 'to';
        }
        else if (this.opened === 'to') {
            this.dateTo = selectedDate;
            this.opened = 'from';
        }
        this.generateCalendar();
    };
    NgDateRangePickerComponent.prototype.prevMonth = function () {
        this.date = dateFns.subMonths(this.date, 1);
        this.generateCalendar();
    };
    NgDateRangePickerComponent.prototype.nextMonth = function () {
        this.date = dateFns.addMonths(this.date, 1);
        this.generateCalendar();
    };
    NgDateRangePickerComponent.prototype.selectRange = function (range) {
        var today = dateFns.startOfDay(new Date());
        switch (range) {
            case 'tm':
                this.dateFrom = dateFns.startOfMonth(today);
                this.dateTo = dateFns.endOfMonth(today);
                break;
            case 'lm':
                today = dateFns.subMonths(today, 1);
                this.dateFrom = dateFns.startOfMonth(today);
                this.dateTo = dateFns.endOfMonth(today);
                break;
            case 'lw':
                today = dateFns.subWeeks(today, 1);
                this.dateFrom = dateFns.startOfWeek(today, { weekStartsOn: this.options.startOfWeek });
                this.dateTo = dateFns.endOfWeek(today, { weekStartsOn: this.options.startOfWeek });
                break;
            case 'tw':
                this.dateFrom = dateFns.startOfWeek(today, { weekStartsOn: this.options.startOfWeek });
                this.dateTo = dateFns.endOfWeek(today, { weekStartsOn: this.options.startOfWeek });
                break;
            case 'ty':
                this.dateFrom = dateFns.startOfYear(today);
                this.dateTo = dateFns.endOfYear(today);
                break;
            case 'ly':
                today = dateFns.subYears(today, 1);
                this.dateFrom = dateFns.startOfYear(today);
                this.dateTo = dateFns.endOfYear(today);
                break;
        }
        this.range = range;
        this.generateCalendar();
    };
    NgDateRangePickerComponent.prototype.handleBlurClick = function (e) {
        var target = e.srcElement || e.target;
        if (!this.elementRef.nativeElement.contains(e.target) && !target.classList.contains('day-num')) {
            this.opened = false;
        }
    };
    return NgDateRangePickerComponent;
}());
export { NgDateRangePickerComponent };
NgDateRangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-daterangepicker',
                templateUrl: 'ng-daterangepicker.component.html',
                styleUrls: ['ng-daterangepicker.sass'],
                providers: [DATERANGEPICKER_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgDateRangePickerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
NgDateRangePickerComponent.propDecorators = {
    'options': [{ type: Input },],
    'handleBlurClick': [{ type: HostListener, args: ['document:click', ['$event'],] },],
};
