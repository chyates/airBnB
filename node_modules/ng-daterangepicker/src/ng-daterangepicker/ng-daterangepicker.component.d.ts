import { OnInit, ElementRef, OnChanges, SimpleChange } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface NgDateRangePickerOptions {
    theme: 'default' | 'green' | 'teal' | 'cyan' | 'grape' | 'red' | 'gray';
    range: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly';
    dayNames: string[];
    presetNames: string[];
    dateFormat: string;
    outputFormat: string;
    startOfWeek: number;
}
export interface IDay {
    date: Date;
    day: number;
    weekday: number;
    today: boolean;
    firstMonthDay: boolean;
    lastMonthDay: boolean;
    visible: boolean;
    from: boolean;
    to: boolean;
    isWithinRange: boolean;
}
export declare let DATERANGEPICKER_VALUE_ACCESSOR: any;
export declare class NgDateRangePickerComponent implements ControlValueAccessor, OnInit, OnChanges {
    private elementRef;
    options: NgDateRangePickerOptions;
    modelValue: string;
    opened: false | 'from' | 'to';
    date: Date;
    dateFrom: Date;
    dateTo: Date;
    dayNames: string[];
    days: IDay[];
    range: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly';
    defaultOptions: NgDateRangePickerOptions;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(elementRef: ElementRef);
    value: string;
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    initNames(): void;
    generateCalendar(): void;
    toggleCalendar(e: MouseEvent, selection: 'from' | 'to'): void;
    closeCalendar(e: MouseEvent): void;
    selectDate(e: MouseEvent, index: number): void;
    prevMonth(): void;
    nextMonth(): void;
    selectRange(range: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly'): void;
    handleBlurClick(e: MouseEvent): void;
}
