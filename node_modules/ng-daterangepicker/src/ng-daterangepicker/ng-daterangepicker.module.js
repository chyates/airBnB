import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgDateRangePickerComponent } from './ng-daterangepicker.component';
var NgDateRangePickerModule = (function () {
    function NgDateRangePickerModule() {
    }
    return NgDateRangePickerModule;
}());
export { NgDateRangePickerModule };
NgDateRangePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgDateRangePickerComponent],
                imports: [CommonModule, FormsModule],
                exports: [NgDateRangePickerComponent, CommonModule, FormsModule]
            },] },
];
/** @nocollapse */
NgDateRangePickerModule.ctorParameters = function () { return []; };
