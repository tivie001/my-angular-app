import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert-comp',
    templateUrl: './warning-alert.comp.html'
})
export class WarningAlertComp {
    allowNewCourse = false;
    assignmentsOpened = false;
    constructor() {
        setTimeout(() => {
            this.allowNewCourse = true;
        }, 1000)
    }
}